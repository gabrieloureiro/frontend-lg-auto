import React, { Fragment } from "react";

import Sidebar from "~/components/Sidebar";

const UnloggedLayout = ({ children }) => (
	<Fragment>
		<Sidebar />
		{children}
	</Fragment>
);

export default UnloggedLayout;
