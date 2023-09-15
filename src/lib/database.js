import sql from "mssql/msnodesqlv8";
import "dotenv/config";

const config = 
{
    user: process.env.DB_USER,
    server: process.env.SERVER,
    database: process.env.DB_TABLENAME,
    options: {
        trustedConnection: true,
        trustServerCertificate: true
    }
};

export const getProjectNr = async (/** @type {FormDataEntryValue | null} */ projectNr) => {
    try {
        await sql.connect(config);
        console.log("Connected to Database");
        const client = await sql.query(`SELECT ADDITIONAL1 FROM ADDRESS WHERE ID = (SELECT ADDRESS_ID FROM ORDERS WHERE NAME_SHORT = '${projectNr}')`);
        const projectManager = await sql.query(`SELECT CONCAT(FIRST_NAME,' ', LAST_NAME) AS FULLNAME FROM EMPLOYEE WHERE ID = (SELECT PROJ_MANAGER_ID FROM PROJECT WHERE NAME_SHORT = '${projectNr}')`)
        const projectName = await sql.query(`SELECT NAME_LONG FROM ORDERS WHERE NAME_SHORT = '${projectNr}';`);
        const protocolReceiver = await sql.query(`SELECT EMAIL_COMOPANY FROM EMPLOYEE WHERE CONCAT(FIRST_NAME, ' ' ,LAST_NAME) = '${projectManager.recordset[0].FULLNAME}'`); 
        const samplingLocation = await sql.query(`SELECT CITY FROM ADDRESS WHERE ID = (SELECT ADDRESS_ID FROM ORDERS WHERE NAME_SHORT = '${projectNr}')`);

        console.log("result from additional table: " + JSON.stringify(projectManager.recordset[0]));
        return {
            protocolData: {
                client: client.recordset[0].ADDITIONAL1,
                projectManager: projectManager.recordset[0].FULLNAME,
                projectName: projectName.recordset[0].NAME_LONG,
                protocolReceiver: protocolReceiver.recordset[0].EMAIL_COMOPANY,
                samplingLocation: samplingLocation.recordset[0].CITY
            }
        };
    } catch (error) {
        console.log(error);
    }
}
