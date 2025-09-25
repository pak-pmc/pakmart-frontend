'use client'

import {ProductsGrid} from "@/components/products-grid"
import {Header} from "@/components/header"
import {Loader2, Search} from "lucide-react"
import {Input} from "@/components/ui/input"
import {useProducts, fetchProductsApi} from "@/src/actions/GetProductsAction"
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {response} from "@/src/utils/helpers";
import type {IProduct} from "@/src/interfaces/IProduct";
import type {IMeta} from "@/src/interfaces/IMeta";

export default function ProductsPage() {

    const [page, setPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [allProducts, setAllProducts] = useState<IProduct[]>([])
    const [metaState, setMetaState] = useState<IMeta>({} as IMeta)

    const params = new URLSearchParams(window.location.search)
    const filters = params.has('filters') ? 'filters=' + params.get('filters') : '';

    const {products, isLoading, error, meta} = useProducts(50, page, filters)

    // Seed aggregated state from the first page (or when page changes explicitly)
    useEffect(() => {
        if (!isLoading && !error) {
            // When page is 1, we reset aggregation to whatever the hook fetched
            if (page === 1) {
                setAllProducts(products ?? [])
                setMetaState(meta)
            }
        }
    }, [products, meta, isLoading, error, page])

    const handleLoadMore = async () => {
        setIsLoadingMore(true);
        try {
            let nextPage = page + 1;
            const httpRes = await fetchProductsApi(50, nextPage, filters)
            const parsed = response<IProduct[]>(httpRes)
            const newProducts = parsed?.data ?? []
            const newMeta = parsed?.meta as IMeta

            if (!newProducts.length) {
                setPage(prev => (prev < nextPage - 1 ? nextPage - 1 : prev))
                return
            }

            setAllProducts(prev => [...prev, ...newProducts])
            setMetaState(newMeta)

        } catch (error) {
            console.error("[v0] Error loading more products:", error)
        } finally {
            setIsLoadingMore(false)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Header/>

            {/* Page Header */}
            {/*<div className="bg-muted/50 py-12">*/}
            {/*    <div className="container mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <h1 className="text-4xl font-bold text-foreground mb-4">Construction Materials</h1>*/}
            {/*        <p className="text-lg text-muted-foreground max-w-2xl">*/}
            {/*            Professional-grade construction materials for contractors, builders, and DIY enthusiasts.*/}
            {/*            Quality products*/}
            {/*            at competitive prices.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Search and Filters */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:w-64 flex-shrink-0">
                        {/*<ProductFilters/>*/}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="relative max-w-md">
                                <Search
                                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                                <Input placeholder="Search products..." className="pl-10"/>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {isLoading && page === 1 ? (
                            <div className="text-muted-foreground">Loading products...</div>
                        ) : error ? (
                            <div className="text-red-500">Failed to load products</div>
                        ) : (
                            <ProductsGrid products={allProducts} meta={metaState}/>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center pt-10 pb-8">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                >
                    {isLoadingMore ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin"/>
                            Loading More Products...
                        </>
                    ) : (
                        "Load More Products"
                    )}
                </Button>
            </div>


        </div>

    )
}
