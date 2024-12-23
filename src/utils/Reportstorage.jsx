const report = [];

export const setReportStorage = (updatedReport) => {
    localStorage.setItem('report', JSON.stringify(updatedReport));
};

export const getReportStorage = () => {
    const storedReport = JSON.parse(localStorage.getItem('report')) || [];
    return storedReport;
};