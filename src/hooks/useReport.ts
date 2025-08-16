import React from "react";
import { GeneralReport, GoodsReport, WalletReport } from "../types/report.type";
import axiosClient from "../utils/axiosClient";

type ReportType = 'general' | 'wallet' | 'goods' | 'services';
interface UseReportProps {
    reportType: ReportType;
}
interface Reports {
    general: GeneralReport[];
    wallet: WalletReport[];
    goods: GoodsReport[];
    services: []    
}

const useReport = ({ reportType }: UseReportProps) => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ reports, setReports ] = React.useState<Reports>({
        general: [],
        wallet: [],
        goods: [],
        services: [],
    })
    const [ page, setPage ] = React.useState(1);

    const getReport = async () => {
        try {
            setIsLoading(true);

            let pathParam: string = reportType;

            const reportByTypes = ['goods', 'services'];
            if(reportByTypes.includes(reportType)) {
                pathParam = `product-type?productTypeName=${reportType}`
            }

            const { data: response } = await axiosClient.get(`user/report/${pathParam}`);

            console.log(response)

            // setReports(prev => ({
            //     ...prev,
            //     [reportType]: response.data.data
            // }))

        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getReport()
    }, [page])

    return {
        isLoading,
        reports,
    }

}

export default useReport;