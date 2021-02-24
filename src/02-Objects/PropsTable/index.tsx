import React from 'react';
import { uid } from '../../helpers/helpFunctions';

import style from './PropsTable.module.scss';

type Props = {
	content: {
		name: string;
		required: string;
		type: string;
		description: string;
	}[];
};

const PropsTable = ({ content }: Props) => {
	return (
		<table className={style.propsTable}>
			<thead>
				<tr className={style.propsTable__row}>
					<th className={style.headerItem}>Name</th>
					<th className={style.headerItem}>Required</th>
					<th className={style.headerItem}>Type</th>
					<th className={style.headerItem}>Description</th>
				</tr>
			</thead>
			<tbody>
				{content.map((item) => {
					return (
						<tr key={uid()} className={style.propsTable__row}>
							<td className={style.dataItem}>{item.name}</td>
							<td className={style.dataItem}>{item.required}</td>
							<td className={style.dataItem}>{item.type}</td>
							<td className={style.dataItem}>
								{item.description}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default PropsTable;
