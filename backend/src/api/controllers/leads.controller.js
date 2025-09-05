import { leadSchema } from "../../services/zod.js";
import Lead from "../../db/db.js";



//create leads
const createLead = async (req, res) => {
    try {
        const validation = leadSchema.safeParse(req.body);
        if (!validation.success) {
            
            console.log(validation);
            return res.status(400).json({ message: "Invalid data", errors: validation.error.errors });
        }
        
        console.log(req.body);
        const { name,
                phoneNumber,
                alternatePhoneNumber,
                email,
                alternateEmail,
                status, 
                qualification, 
                interestedField, 
                source, 
                assignedTo, 
                jobInterest, 
                state, 
                city, 
                passOutYear, 
                heardFrom } = req.body;

                if(!req.body)
                    return res.status(400).json({ message: "All fields are required" });

        const leads = await Lead.create({
            name,
            phoneNumber,
            alternatePhoneNumber,
            email,
            alternateEmail,
            status,
            qualification,
            interestedField,
            source,
            assignedTo,
            jobInterest,
            state,
            city,
            passOutYear,
            heardFrom
        });
        res.json(leads);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Creating leads" });
    }
};


//getleads
const getAllLeads = async (req, res) => {
    try {
            const leads = await Lead.find();
            // Map to only specific fields
            const filteredLeads = leads.map(lead => ({
                name: lead.name,
                phoneNumber: lead.phoneNumber,
                status: lead.status,
                qualification: lead.qualification,
                interestedField: lead.interestedField,
                source: lead.source,
                assignedTo: lead.assignedTo,
                updateDate: lead.updateDate
            }));
            res.json(filteredLeads);
    } catch (error) {
        res.status(500).json({ message: "Error Fetching leads" });
    }
};

//getby filter
const getByFilter = async (req, res) => { 
    const filter = req.query.filter || "";
    const status = req.query.status || "";
    const condition = req.query.condition; // Default to "OR" if not provided
    console.log("Filter Condition:", condition);
    console.log("Filter:", req.query.filter);
    console.log("Status:", status);

    try {   
        let query = {};
        if (condition === "AND") {
            query = {$and : [
                { name: { $regex: filter } },
                { status: { $regex: status } }
            ]}
        }

        else if(condition === "OR"){
            query = {
                $or : [
                { name: { $regex: filter } },
                { phoneNumber: { $regex: filter } },
                { email: { $regex: filter } },
                { status: { $regex: status } }
            ]
        }
        }

        else{
            query ={
                $or: [
                { name: { $regex: filter } }
                ]
            }
        }
        
            
            const  leads  = await Lead.find(query);


            const filteredLeads = leads.map(lead => ({
                name: lead.name,
                phoneNumber: lead.phoneNumber,
                status: lead.status,
                qualification: lead.qualification,
                interestedField: lead.interestedField,
                source: lead.source,
                assignedTo: lead.assignedTo,
                updateDate: lead.updateDate
            }));

            res.json(filteredLeads);
    }catch (error) {
        console.log(error);
       res.status(500).json({ message: "Error Fetching leads" });
    }

}



export { createLead, getAllLeads,getByFilter };