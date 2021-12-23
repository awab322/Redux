export const depositMoney = (mm)=>
{
    return {
        type:"deposit",
        payload:mm
    }
}

export const withdrawMoney = (mm)=>
{
    return {
        type:"withdraw",
        payload:mm
    }
}