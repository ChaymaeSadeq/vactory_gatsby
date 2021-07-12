import React from "react"
import {
    HeaderA as Header,
    FooterA as Footer,
    Breadcrumb,
    BannersTemplate,
    CookieComplianceLayer,
    OfflineDetector,
    BackToTop,
    StatePageSection,
    BlocksController
} from 'vactory-gatsby-ui'
import "../../../styles.css"
import Cookies from "js-cookie"

export const DefaultLayout = ({children, location, pageContext: {node, pageInfo, breadcrumb}, nodeSettings}) => {
  console.log('***************GET Nodes****************');
  console.log(node);
  console.log('***************************************');
    return (
        <>
            <StatePageSection.Provider>
            <Header pageInfo={pageInfo} currentLanguage={node.langcode} location={location}/>
            {node.internal_node_banner &&
            <BannersTemplate
                widget={node.internal_node_banner}
                node={node}
                breadcrumbItems={(breadcrumb && breadcrumb.length > 0) ? breadcrumb : [] }/>
            }
            {breadcrumb && breadcrumb.length > 0 && (
                <div className="mt-5 mb-3">
                    <Breadcrumb items={breadcrumb} />
                </div>
            )}
            <main>
            {/* <TestComponents /> */}
            <div>
  <div>
    <div>
      <br></br>
    </div>
  <div
				class="mt-2 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer ">
				<div class="flex justify-between">

					<img
						class="h-12 w-12 rounded-full object-cover"
						src="https://inews.gtimg.com/newsapp_match/0/8693739867/0"
						alt="" />

					<div
						class="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>name</span>
						<span class="mt-2 text-black dark:text-gray-200">
							carmen beltran
						</span>
					</div>

					<div
						class="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>login</span>
						<span class="mt-2 text-black dark:text-gray-200">
							carmen.bel
						</span>

					</div>

				</div>

				<div class="flex">

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>project</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Aero treck
						</span>
						<span class="text-red-600 dark:text-red-400">
							search
						</span>
						<span>2 more...</span>
					</div>

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>role</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Designer
						</span>
						<span class="text-red-600 dark:text-red-400">
							Designer
						</span>
					</div>

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>status</span>
						<span class="mt-2 text-black dark:text-gray-200">
							None
						</span>
						<span class="text-red-600 dark:text-red-400">
							in work
						</span>
					</div>

					<div
						class="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>final date</span>
						<span class="mt-2 text-green-400 dark:text-green-200">
							20.02.2020
						</span>
						<span class="text-red-600 dark:text-red-400">
							07.02.2020 11:00
						</span>
					</div>

				</div>

			</div>
      <div
				class="mt-8 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">

				<div class="flex justify-between">

					<img
						class="h-12 w-12 rounded-full object-cover"
						src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
						alt="" />

					<div
						class="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>name</span>
						<span class="mt-2 text-black dark:text-gray-200">
							enoshima junko
						</span>
					</div>

					<div
						class="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>login</span>
						<span class="mt-2 text-black dark:text-gray-200">
							zetsbuo
						</span>

					</div>

				</div>

				<div class="flex">

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>project</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Aero treck
						</span>
					</div>

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>role</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Front-End
						</span>
					</div>

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>status</span>
						<span class="mt-2 text-yellow-600 dark:text-yellow-400">
							in work
						</span>
					</div>

					<div
						class="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>final date</span>
						<span class="mt-2 text-green-400 dark:text-green-200">
							20.02.2020 11:00
						</span>
					</div>

				</div>

			</div>
        <div class="mt-4 mx-4">
          <div class="w-full overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-4 py-3">Client</th>
                    <th class="px-4 py-3">Amount</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p class="font-semibold">Hans Burger</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">$855.85</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                    </td>
                    <td class="px-4 py-3 text-sm">15-01-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p class="font-semibold">Jolina Angelie</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Unemployed</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">$369.75</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
                    </td>
                    <td class="px-4 py-3 text-sm">23-03-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p class="font-semibold">Dave Li</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Influencer</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">$775.45</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"> Expired </span>
                    </td>
                    <td class="px-4 py-3 text-sm">09-02-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p class="font-semibold">Rulia Joberts</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Actress</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">$1276.75</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                    </td>
                    <td class="px-4 py-3 text-sm">17-04-2021</td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p class="font-semibold">Hitney Wouston</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Singer</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">$863.45</td>
                    <td class="px-4 py-3 text-xs">
                      <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> Denied </span>
                    </td>
                    <td class="px-4 py-3 text-sm">11-01-2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
              <span class="col-span-2"></span>
              <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                  <ul class="inline-flex items-center">
                    <li>
                      <button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                        <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                    </li>
                    <li>
                      <span class="px-3 py-1">...</span>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
          </div>
        </div>
  </div>
</div>
<div >
</div>

{/* component */}

                {children}
            </main>
            </StatePageSection.Provider>
            <Footer/>
            <CookieComplianceLayer />
            <OfflineDetector />
            <BackToTop />
            <BlocksController blocks={node?.internal_blocks || []} region="bottom" />
        </>
    )
}