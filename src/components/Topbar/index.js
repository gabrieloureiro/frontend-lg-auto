import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import {
	StyledBar,
	Right,
	Left,
	UserPlacement,
	ImageUser,
	Username,
	IconWrapper,
	ArrowWrapper,
	CollapseButton,
	Icon,
	SmallIcon,
} from "./styles";
import { FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const Topbar = ({ collapse, handleCollapsed, isDarkMode, handleTheme }) => {
	return (
		<StyledBar>
			<CollapseButton onClick={handleCollapsed}>
				{collapse ? (
					<Icon children={<FiChevronLeft />} />
				) : (
					<Icon children={<AiOutlineMenu />} />
				)}
			</CollapseButton>
			<Left></Left>
			<Right>
				<IconWrapper onClick={handleTheme}>
					{isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
				</IconWrapper>
				<IconWrapper>
					<GiWallet size={20} />
				</IconWrapper>
				<UserPlacement>
					<ImageUser
						src="https://avatars3.githubusercontent.com/u/39869298?s=460&u=e1e8d6c6f20acb17f1246c026908043636b4455d&v=4"
						alt="user-image"
					/>
					<Username>Gabriel Loureiro</Username>
					<ArrowWrapper>
						<SmallIcon children={<FiChevronDown />} />
					</ArrowWrapper>
				</UserPlacement>
			</Right>
		</StyledBar>
	);
};

export default Topbar;
