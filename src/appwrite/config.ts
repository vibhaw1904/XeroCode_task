import conf from "@/conf/config";
import { Client,Account,ID,Databases } from "appwrite";

type signupUserAccount={
    FirstName:string,
    LastName:string,
    email:string,
    password:string,
    confirmPassword:string
}
type signinUserAccount={
    email:string,
    password:string
}

const appwriteClient=new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)

export const account=new Account(appwriteClient)
export{appwriteClient,ID}
export const database = new Databases(appwriteClient);

