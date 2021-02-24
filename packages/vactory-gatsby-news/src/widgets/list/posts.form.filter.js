import React from 'react'
import { useTranslation } from 'react-i18next'

const PostsFormFilter = ({ terms, value, sort, handleChange, handleChangeSort }) => {
  const { t } = useTranslation();

  return (
		<div className="my-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
			<div>
				<label
					htmlFor="news-category"
					className="block text-sm font-medium text-gray-700"
				>
					{t("Thématique")}
				</label>
				<select
					onChange={(e) => handleChange(e.currentTarget.value)}
					onBlur=""
					defaultValue={value}
					id="news-category"
					name="news-category"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				>
					<option value="all">{t("Tous les thématiques")}</option>
					{terms.map((term) => (
						<option key={term.id} value={term.id}>
							{term.label}
						</option>
					))}
				</select>
			</div>

			<div>
				<label
					htmlFor="news-sort"
					className="block text-sm font-medium text-gray-700"
				>
					{t("Tri")}
				</label>
				<select
					onChange={(e) => handleChangeSort(e.currentTarget.value)}
					onBlur=""
					defaultValue={sort}
					id="news-sort"
					name="news-sort"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				>
					<option value="created">{t("Tri Ascendant")}</option>
					<option value="-created">{t("Tri Descendant")}</option>
				</select>
			</div>
		</div>
  );
}

export default PostsFormFilter
