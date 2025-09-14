type ShareDataProps = {
    product: { name: string; url: string }
    imageUrl?: string
}

export const shareProduct = async ({ product, imageUrl }: ShareDataProps) => {
    try {
        const url = product.url
        const title = product.name
        const text = `Check out this product: ${product.name}`

        // Fallback if share API not available
        if (typeof navigator === "undefined" || typeof (navigator as any).share !== "function") {
            if (navigator?.clipboard) {
                await navigator.clipboard.writeText(url)
                alert("Link copied to clipboard.")
            } else {
                alert(`Share this link: ${url}`)
            }
            return
        }

        let files: File[] | undefined
        if (imageUrl) {
            try {
                const response = await fetch(imageUrl)
                const blob = await response.blob()
                const fileName = imageUrl.split("/").pop() || "product.jpg"
                const file = new File([blob], fileName, { type: blob.type || "image/jpeg" })

                if ((navigator as any).canShare?.({ files: [file] })) {
                    files = [file]
                }
            } catch {
                // Ignore image fetch errors
            }
        }

        const shareData: any = { title, text, url }
        if (files) shareData.files = files

        await (navigator as any).share(shareData)
    } catch (e) {
        try {
            await navigator.clipboard.writeText(product.url)
            alert("Could not open share sheet. Link copied to clipboard.")
        } catch {
            alert("Could not share. Please copy the link manually.")
        }
    }
}
