import { useState } from "react"

export const useLoading = () => {
    const [loading, isLoading] = useState(false)
    return {
        loading,
        isLoading,
    }
}