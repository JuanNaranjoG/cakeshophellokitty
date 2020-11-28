import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../src/layouts/DashboardLayout';
import MainLayout from '../src/layouts/MainLayout/Main';
import Inicio from '../src/layouts/MainLayout/Inicio';
import AccountView from '../src/views/account/AccountView';
import EmpleadoListView from '../src/views/empleado/EmpleadoListView';
import CoccionListView from '../src/views/coccion/CoccionListView';
import EmpresaListView from '../src/views/empresa/EmpresaListView';
import ElaboracionListView from '../src/views/elaboracion/ElaboracionListView';
import OrdenListView from '../src/views/orden/OrdenListView';
import ExternalPeopleListView from '../src/views/externalpeople/ExternalPeopleListView';
import DashboardView from '../src/views/reports/DashboardView';
import Session from '../src/layouts/MainLayout/Session';
import NotFoundView from '../src/views/errors/PageNotFound';
import ProductListView from '../src/views/product/ProductListView';
import PastelListView from '../src/views/pastel/PastelListView';
import HornoListView from '../src/views/horno/HornoListView';
import ConfiguracionView from '../src/views/settings/SettingsView';
/* import Inicio from './views/inicio/Inicio';
import Administracion from './views/administracion/Administracion';
import PageNotFound from './views/PageNotFound'; */


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView/> },
      { path: 'empleados', element: <EmpleadoListView /> },
      { path: 'coccion', element: <CoccionListView /> },
      { path: 'elaboracion', element: <ElaboracionListView /> },
      { path: 'personasexternas', element: <ExternalPeopleListView /> },
      { path: 'empresas', element: <EmpresaListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'ingredientes', element: <ProductListView /> },
      { path: 'pasteles', element: <PastelListView /> },
      { path: 'hornos', element: <HornoListView /> },
      { path: 'orden', element: <OrdenListView /> },
      { path: 'configuracion', element: <ConfiguracionView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'session', element: <Session/> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Inicio/> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
