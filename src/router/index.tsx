import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/SignUp";
import SeekerDashboard from "../pages/SeekerDashboard";
import CompanySignUp from "../pages/CompanySignUp";
import type { ReactNode } from "react";
import {LoaderIcon} from "lucide-react"
import useAuth from "../hooks/useAuth";
import { BrowserRouter, Navigate, Routes, Route } from "react-router";

type RequireAuthTypes = {
    children : ReactNode,
    roles?: string[]
}

const RequireAuth = ({children, roles} : RequireAuthTypes) => {
    const{user, loading} = useAuth()

    if(loading){
        return(
        <div className='min-h-screen bg-base-200 flex items-center justify-center'>
            <LoaderIcon className='animate-spin size-10'/>
        </div>
        )
    }

    if(!user){
        return <Navigate to={"/login"} replace/>
    }

    if(roles && !roles.some((role) => user?.roles.includes(role))){
         return(<div>
            <h1>Access Denied !....</h1>
        </div>)
    }

    return <>{children}</>
}

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePage/>}></Route>
                <Route path="/login" element = {<Login/>}></Route>
                <Route path="/signup" element = {<Register/>}></Route>
                <Route path="/company-signup" element = {<CompanySignUp/>}></Route>

                {/* {Seeker Only Protected (after login, can access)} */}
                <Route
                path = "/seeker-dashboard"
                element={
                    <RequireAuth>
                        <SeekerDashboard/>
                    </RequireAuth>
                }
                />

                {/* {Company Only} */}

                {/* {Officer Only} */}

                
                </Routes>
        </BrowserRouter>
    )
}

export default AppRouter