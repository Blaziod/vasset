import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import SignUp1 from "pages/Auth/signUp1";
import SignIn from "pages/Auth/signIn";
import SignUp2 from "pages/Auth/signUp2";
import SignUp3 from "pages/Auth/signUp3";
import SignUp4 from "pages/Auth/signUp4";
import Dashboard from "pages/Dashboard";
import Assets from "pages/Assets";
import Transactions from "pages/Transactions";
import TrustFund from "pages/TrustFund";
import Profile from "pages/Profile";
import Invest from "pages/Invest";
import Loan from "pages/Loan";
import Homepage from "pages/Homepage";
import ProtectedRoute from "./protectedRoute";
import Support from "pages/Support";
import UnProtectedRoute from "./unprotectedRoute";

const AppRouter = () => {
  return (
    <RouterRoutes>
      <Route
        path="/login"
        element={
          <UnProtectedRoute>
            <SignIn />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/create-account"
        element={
          <UnProtectedRoute>
            <SignUp1 />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/contact-address"
        element={
          <UnProtectedRoute>
            <SignUp2 />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/next-of-kin"
        element={
          <UnProtectedRoute>
            <SignUp3 />
          </UnProtectedRoute>
        }
      />
      <Route
        path="/identification"
        element={
          <UnProtectedRoute>
            <SignUp4 />
          </UnProtectedRoute>
        }
      />
      <Route path="/home" element={<Homepage />} />

      {/* Protected routes wrapped in ProtectedRoute component */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/assets"
        element={
          <ProtectedRoute>
            <Assets />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/trustfund"
        element={
          <ProtectedRoute>
            <TrustFund />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/invest"
        element={
          <ProtectedRoute>
            <Invest />
          </ProtectedRoute>
        }
      />
      <Route
        path="/loan"
        element={
          <ProtectedRoute>
            <Loan />
          </ProtectedRoute>
        }
      />
      <Route
        path="/support"
        element={
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        }
      />
    </RouterRoutes>
  );
};

export default AppRouter;
