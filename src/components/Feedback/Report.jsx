
import React, { useState } from 'react';
import { getReportStorage, setReportStorage } from '../../utils/Reportstorage';

const Report = () => {
    const [reportemail, setReportEmail] = useState('')
    const [reportTitle, setReportTitle] = useState('');
    const [reportDescription, setReportDescription] = useState('');
    const [reportFile, setReportFile] = useState(null);

    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };


    const reportHandle =async (e) => {
        e.preventDefault();

        // Get existing reports from local storage
        const existingReports = getReportStorage();
        const fileBase64 = reportFile ? await convertFileToBase64(reportFile) : null;

        // Create new report object
        const newReport = {
            reportemail,
            reportTitle,
            reportDescription,
            reportFile:fileBase64
        };

        // Update local storage
        const updatedReports = [...existingReports, newReport];
        setReportStorage(updatedReports);

        // Reset state
        setReportEmail('')
        setReportTitle('');
        setReportDescription('');
        setReportFile(null);

        // Log updated reports
        console.log('Updated Reports:', getReportStorage());
    };

    return (
        <div className="flex items-center justify-center  mt-20">
            <form
                onSubmit={(e) => reportHandle(e)}
                className="flex flex-col border-green-500 border-2 p-5 rounded-xl mt-20"
            >
                <h1 className="font-bold text-xl pb-1">Give Project Report</h1>
                <input
                value={reportemail}
                onChange={(e) => setReportEmail(e.target.value)}
                 type="email" placeholder='Enter Your Email-ID' className="border-green-500 bg-transparent mb-10 border-2 outline-none color-white text-xl rounded-xl"
                />
                
                <input
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    className="border-green-500 bg-transparent mb-10 border-2 outline-none color-white text-xl rounded-xl"
                    type="text"
                    placeholder="Title"
                />


                <textarea
                    value={reportDescription}
                    onChange={(e) => setReportDescription(e.target.value)}
                    rows="3"
                    className="border-green-500 bg-transparent mb-10 border-2 outline-none color-white text-xl rounded-xl"
                    placeholder="Project Report"
                ></textarea>

                <h3 className="font-bold text-xl pb-1">Choose Report Description</h3>

                <input
                    onChange={(e) => setReportFile(e.target.files[0])}
                    className="bg-transparent border-green-500 mb-10 border-2 outline-none color-white text-xl rounded-xl"
                    type="file"
                    id="fileInput"
                />

                <button
                    className="border-green-500 bg-green-500 mb-10 border-2 outline-none color-white text-xl rounded-xl"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Report;