import { lazy } from "react";
const ROUTES = {
	DASHBOARD: lazy(() => import("~/pages/Dashboard")),
	CLIENTS: lazy(() => import("~/pages/Clients")),
	SUPPLIERS: lazy(() => import("~/pages/Suppliers")),
	TRANSACTIONS: lazy(() => import("~/pages/Transactions")),
	TRANSFERS: lazy(() => import("~/pages/Transfers")),
	SETTINGS: lazy(() => import("~/pages/Settings")),
};

export const AVAILABLE_ROUTES = [
	{
		title: "Dashboard",
		prefixUrlMatch: "dashboard",
		icon: "dashboard",
		routes: [
			{
				title: "Dashboard",
				path: "/dashboard",
				component: ROUTES.DASHBOARD,
			},
		],
	},
	{
		title: "Clientes",
		prefixUrlMatch: "clients",
		icon: "clients",
		routes: [
			{
				title: "Clientes",
				path: "/clients",
				component: ROUTES.CLIENTS,
			},
		],
	},
	{
		title: "Fornecedores",
		prefixUrlMatch: "suppliers",
		icon: "suppliers",
		routes: [
			{
				title: "Fornecedores",
				path: "/suppliers",
				component: ROUTES.SUPPLIERS,
			},
		],
	},
	{
		title: "Transações",
		prefixUrlMatch: "transactions",
		icon: "transactions",
		routes: [
			{
				title: "Transações",
				path: "/transactions",
				component: ROUTES.TRANSACTIONS,
			},
		],
	},
	{
		title: "Transferências",
		prefixUrlMatch: "transfers",
		icon: "transfers",
		routes: [
			{
				title: "Transferências",
				path: "/transfers",
				component: ROUTES.TRANSFERS,
			},
		],
	},
	{
		title: "Configurações",
		prefixUrlMatch: "settings",
		icon: "settings",
		routes: [
			{
				title: "Configurações",
				path: "/settings",
				component: ROUTES.SETTINGS,
			},
		],
	},
];
