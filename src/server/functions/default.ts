import { createServerFn } from "@tanstack/react-start";

export const getMessage = createServerFn().handler(async () => {
    return {
        message: "Hello World"
    }
})

export const getServerTime = createServerFn().handler(async () => {
    return {
        time: new Date().toLocaleString()
    }
})