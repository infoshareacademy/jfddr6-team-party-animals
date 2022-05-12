import NavbarWrapp from './../components/NavbarWrapp'

import React from 'react'

function PriceList() {
	return (
		<>
			<NavbarWrapp />
			<div className='container' style={{ width: '100%', marginTop: '100px', padding: '0 50px' }}>
				<table id='price'>
					<tbody>
						<tr>
							<td style={{ width: '90%' }}>
								<strong>Rasa psa</strong>
							</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>
								<strong>Cena zabiegu</strong>
							</td>
						</tr>
						<tr>
							<td>yorkshire terrier, maltańczyk, pomeranian, toy pudel, jamnik długowłosy miniaturowy</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>100 zł</td>
						</tr>
						<tr>
							<td>shih tzu, lhasa apso, pudel miniaturowy, bolończyk, hawańczyk, sheltie, pekińczyk</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>120 zł</td>
						</tr>
						<tr>
							<td>chomik syryjski, chomik roborowskiego, choik chiński, chomik campbella</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>70 zł</td>
						</tr>
						<tr>
							<td>west highland white terrier, sznaucer miniaturowy, welsh terrier</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}> 120 zł</td>
						</tr>
						<tr>
							<td>foksterier, terier szkocki, jamnik szorstkowłosy standardowy, sznaucer średni</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>140 zł</td>
						</tr>
						<tr>
							<td>kot syberyjski, kot syjamski, kot ragdoll, kot norweski leśny, kot ashe</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>100 zł</td>
						</tr>
						<tr>
							<td>cairn terrier, border terrier, gryfonik brukselski, jamnik szorstkowłosy miniaturowy</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>120 zł</td>
						</tr>
						<tr>
							<td>jamnik długowłosy standardowy, cavalier king charles spaniel</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>140-150 zł</td>
						</tr>
						<tr>
							<td>springer spaniel angielski, cocker spaniel angielski, seter, golden retriever</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>150-200 zł</td>
						</tr>
						<tr>
							<td>lagotto romagnolo, barbet, akita</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>200 zł</td>
						</tr>
						<tr>
							<td>owczarek niemiecki krótkowłosy</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>140 zł</td>
						</tr>

						<tr>
							<td>buldożek francuski, mops, toy rosyjski długowłosy, papillon</td>
							<td style={{ width: ' 35%', textAlign: 'center', padding: '20px' }}>80 zł</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default PriceList
