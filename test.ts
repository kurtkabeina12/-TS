interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

function isResponseSuccess(res: IResponseFailed | IResponseSuccess): res is IResponseSuccess{
    if(res.status == PaymentStatus.Success){
        return true
    }else{
        return false
    }
}

function f(res: IResponseSuccess | IResponseFailed){
    if(isResponseSuccess(res)){
        return res.data
    }else{
        return res.data.errorMessage
    }
}