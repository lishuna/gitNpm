export interface StatisticData {
    from: string;
    operator: string;
    memberId: string;
    service: {
        apiException: {
            requestTime: number;
            url: string;
            params: any;
            resCode: number;
            resMessage: string;
            errorMessage: string;
        };
    };
}
