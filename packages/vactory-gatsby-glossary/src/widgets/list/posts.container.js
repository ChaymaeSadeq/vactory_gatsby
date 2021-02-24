import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Api from "vactory-gatsby-api";
import { useForm } from "react-hook-form";
import { LoadingOverlay } from "vactory-gatsby-ui";
import {
  postsQueryParams,
  normalizeNodes,
  PostsPage,
  PostsFormFilter,
  Alphabet,
  arabicAlphabet,
  AFilter,
  BFilter,
} from "vactory-gatsby-glossary";

export const PostsContainer = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = (currentLanguage === "ar");
  const [posts, setPosts] = useState([]);

  const [selectedAlphabet, setSelectedAlphabet] = useState(
      isArabic ? "أ" : "A"
  );
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [internalAlphabet] = useState(
      isArabic ? arabicAlphabet : Alphabet
  );
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (alphabet) => {
    setSelectedAlphabet(alphabet);
    setSelectedKeyword(null);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSelectedKeyword(data["keyword"]);
  };
  const reset = () => {
    setSelectedKeyword(null);
    setSelectedAlphabet(isArabic ? "أ" : "A");
  };

  useEffect(() => {
    function fetchData() {
      let AlphabetFilter = {
        "filter[label][condition][path]": "title",
        "filter[label][condition][operator]": "STARTS_WITH",
        "filter[label][condition][value]": selectedAlphabet,
      };
      let wordFilter = {
        "filter[label][condition][path]": "title",
        "filter[label][condition][operator]": "CONTAINS",
        "filter[label][condition][value]": selectedKeyword,
      };

      if (isArabic && selectedAlphabet === "أ") {
        AlphabetFilter = AFilter;
      }
      if (isArabic && selectedAlphabet === "ء") {
        AlphabetFilter = BFilter;
      }
      const Filter = selectedKeyword ? wordFilter : AlphabetFilter;
      const requestParams = {
        ...postsQueryParams,
        ...Filter,
      };
      setIsLoading(true);
      Api.getResponse("node/glossary", requestParams, currentLanguage)
        .then((res) => {
          const normalizedNodes = normalizeNodes(res.data);
          setPosts(normalizedNodes);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error");
          setIsLoading(false);
          console.log(err);
        });
    }

    fetchData();
  }, [selectedAlphabet, currentLanguage, selectedKeyword, isArabic]);

  return (
		<div className="bg-gray-100">
			{/*<Heading px="xsmall" level={2} textAlign="center">*/}
			{/*  {t("Glossary")}*/}
			{/*</Heading>*/}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="my-6 flex space-x-4"
			>
				<div className="flex-1 min-w-0">
					<label htmlFor="search" className="sr-only">
						Search
					</label>
					<div className="relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							{/* Heroicon name: mail */}
							<svg
								className="h-5 w-5 text-gray-400"
								x-description="Heroicon name: solid/search"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<input
							ref={register}
							type="search"
							name="search"
							id="search"
							className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
							placeholder="Search"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="inline-flex justify-center px-3.5 py-2 border border-indigo-400 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400"
				>
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="sr-only">{t("Appliquer")}</span>
				</button>
				<button
					onClick={reset}
					type="reset"
					className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					<svg
						className="h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="sr-only">{t("Rénitialiser")}</span>
				</button>
			</form>

			<PostsFormFilter
				alphabet={internalAlphabet}
				handleChange={handleChange}
			/>
			<LoadingOverlay active={isLoading}>
				{posts.length > 0 && <PostsPage posts={posts} />}
				{!isLoading && posts.length <= 0 && (
					<p className="text-center my-8">
						{t("Aucun résultat trouvé")}
					</p>
				)}
			</LoadingOverlay>
		</div>
  );
};
