export async function load({ params }): Promise<{ slug: string }> {
    const { slug } = params
    return {
        slug
    }
}