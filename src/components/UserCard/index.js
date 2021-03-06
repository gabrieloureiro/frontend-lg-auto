import React from 'react'
import {
	UserCardWrapper,
	Image,
	Name,
	MediumText,
	Row
} from './styles'

const UserCard = ({
	id,
	image_url,
	is_company,
	company_name,
	person_in_charge,
	cpf,
	cnpj,
	email,
	created_at,
	updated_at
}) => {
	return (
		<UserCardWrapper>
			<Image src={image_url} alt={is_company ? company_name : person_in_charge} />
			<Name>{is_company ? company_name : person_in_charge}</Name>
			<Row full center>
				<MediumText>(85) 99913-4041</MediumText>
				<MediumText>{email}</MediumText>
			</Row>
		</UserCardWrapper>
	)
}

export default UserCard
