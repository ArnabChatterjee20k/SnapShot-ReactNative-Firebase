export async function exceptionHandler(callback,...args){
    // console.log(args) // [{email,password}]
    try {
        const data = await callback(...args)
        return [data,null]
    } catch (error) {
        return [null,error]
    }
}