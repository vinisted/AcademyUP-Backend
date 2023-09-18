import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database"
import { adminJsResources } from "./resources";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: adminJsResources,
    branding: {
        companyName: 'Academy Up',
        logo: '/academyup-logo.svg',
        theme: {
          colors: {
            primary100: '#fea000',
              primary80: '#fea000',
              primary60: '#fea000',
              primary40: '#fea000',
                primary20: '#fea000',
              grey100: '#151515',
              grey80: '#333333',
              grey60: '#4d4d4d',
              grey40: '#666666',
              grey20: '#dddddd',
              filterBg: '#333333',
              accent: '#151515',
              hoverBg: '#151515',
            }
        }
    }
})

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs)