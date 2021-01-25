import React from "react";
import {
	StyledSidebar,
	Navigation,
	NavigationList,
	NavigationItem,
	NavigationLink,
	Icon,
	Tooltip
} from "./styles";

import { useLocation } from "react-router-dom";

import { AVAILABLE_ROUTES } from "~/services/contentProvider";
import { FiUsers, FiShoppingBag, FiSettings } from "react-icons/fi";
import { AiOutlinePieChart, AiOutlineTransaction } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";

const Sidebar = ({ isLogged = false, collapse }) => {
	let location = useLocation();
	let currentRoute = location.pathname;

	const handleIcon = (icon) => {
		switch (icon) {
			case "dashboard":
				return <AiOutlinePieChart />;
			case "clients":
				return <FiUsers />;
			case "suppliers":
				return <FiShoppingBag />;
			case "transactions":
				return <AiOutlineTransaction />;
			case "transfers":
				return <GiTakeMyMoney />;
			case "settings":
				return <FiSettings />;
			default:
				return null;
		}
	};

	return (
		<StyledSidebar collapsed={!collapse ? true : false}>
			{isLogged && (
				<Navigation>
					<NavigationList>
						{AVAILABLE_ROUTES.map((item, i) => {
							return (
								<NavigationItem key={item.icon + i}>
									<NavigationLink
										to={item.routes[0].path}
										active={currentRoute.includes(item.prefixUrlMatch)}
									>
										<Icon children={handleIcon(item.icon)} />
										<Tooltip>{item.currentRoute}</Tooltip>
									</NavigationLink>
								</NavigationItem>
							);
						})}
					</NavigationList>
				</Navigation>
			)}
		</StyledSidebar>
	);
};

export default Sidebar;
