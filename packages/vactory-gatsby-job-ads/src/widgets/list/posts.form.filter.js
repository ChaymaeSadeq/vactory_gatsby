import React from 'react'
import { useTranslation } from 'react-i18next'

const PostsFormFilter = ({
  cities,
  contracts,
  professions,
  value,
  handleChangeCity,
  handleChangeContract,
  handleChangeProfession,
}) => {
  const { t } = useTranslation()

  return (
		<div className="my-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
			<div>
				<label
					htmlFor="job-ads-professions"
					className="block text-sm font-medium text-gray-700"
				>
					{t("Thématique")}
				</label>
				<select
					onChange={(e) => handleChangeCity(e.currentTarget.value)}
					onBlur={null}
					defaultValue={value}
					id="job-ads-professions"
					name="job-ads-professions"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				>
					<option value="all">{t("Toutes les professions")}</option>
					{professions.map((term) => (
						<option key={term.id} value={term.id}>
							{term.label}
						</option>
					))}
				</select>
			</div>

			<div>
				<label
					htmlFor="job-ads-contracts"
					className="block text-sm font-medium text-gray-700"
				>
					{t("Type de contrat")}
				</label>
				<select
					onChange={(e) =>
						handleChangeContract(e.currentTarget.value)
					}
					onBlur={null}
					defaultValue={value}
					id="job-ads-contracts"
					name="job-ads-contracts"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				>
					<option value="all">{t("Tous les thématiques")}</option>
					{contracts.map((term) => (
						<option key={term.id} value={term.id}>
							{term.label}
						</option>
					))}
				</select>
			</div>

			<div>
				<label
					htmlFor="job-ads-cities"
					className="block text-sm font-medium text-gray-700"
				>
					{t("Ville")}
				</label>
				<select
					onChange={(e) =>
						handleChangeProfession(e.currentTarget.value)
					}
					onBlur={null}
					defaultValue={value}
					id="job-ads-cities"
					name="job-ads-cities"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				>
					<option value="all">{t("Toutes les villes")}</option>
					{cities.map((term) => (
						<option key={term.id} value={term.id}>
							{term.label}
						</option>
					))}
				</select>
			</div>
		</div>
  );
}

export default PostsFormFilter
