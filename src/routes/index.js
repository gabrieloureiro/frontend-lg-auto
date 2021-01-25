import React, { Suspense, lazy } from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import Route from "./route";
import { AVAILABLE_ROUTES } from "~/services/contentProvider";
import Loading from "~/components/Loading";

const ROUTES = {
	LOGIN: lazy(() => import("~/pages/Login")),
	DASHBOARD: lazy(() => import("~/pages/Dashboard")),
	NOT_FOUND: lazy(() => import("~/pages/NotFound")),
};

const Routes = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route exact path="/" component={ROUTES.LOGIN} />
					<Route
						exact
						path="/dashboard"
						component={ROUTES.DASHBOARD}
						isPrivate
					/>
					{AVAILABLE_ROUTES.map((route) => {
						return route.routes.map(({ path, component }, index) => {
							return (
								<Route
									exact
									path={path}
									component={component}
									isPrivate
									key={index}
								/>
							);
						});
					})}
					<Route component={ROUTES.NOT_FOUND} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
};

export default Routes;
