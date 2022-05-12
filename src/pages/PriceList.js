import NavbarWrapp from './../components/NavbarWrapp'

import React from 'react'

function PriceList() {
	return (
		<>
			<NavbarWrapp />
			<div className='contaner' style={{ width:'100% height: 50%'}}>
			<table id='price'>
				<tbody>
					<tr>
						<td style={{width: '100%'}}>
							<strong>Rasa psa</strong>
						</td>
						<td style={{width:' 35%; text-align: center;'}}>
							<strong>Cena zabiegu</strong>
						</td>
					</tr>
					<tr>
						<td>yorkshire terrier, maltańczyk, pomeranian, toy pudel, jamnik długowłosy miniaturowy</td>
						<td style={{zwidth:'35%; text-align: center;'}}>100 zł</td>
					</tr>
					<tr>
						<td>shih tzu, lhasa apso, pudel miniaturowy, bolończyk, hawańczyk, sheltie, pekińczyk</td>
						<td style={{width: '35%; text-align: center;'}}>120 zł</td>
					</tr>
					<tr>
						<td>jamnik krótkowłosy, jack russell terrier krótkowłosy, chihuahua</td>
						<td style={{width:' 35%; text-align: center;'}}>70 zł</td>
					</tr>
					<tr>
						<td>west highland white terrier, sznaucer miniaturowy, welsh terrier</td>
						<td style={{width: '35%; text-align:center;'}}>
							120 zł&nbsp;<em>strzyżenie</em> / 150 zł&nbsp;<em>trymowanie</em>
						</td>
					</tr>
					<tr>
						<td>foksterier, terier szkocki, jamnik szorstkowłosy standardowy, sznaucer średni</td>
						<td style={{width: '35%; text-align: center;'}}>
							140 zł&nbsp;<em>strzyżenie</em> / 160 zł&nbsp;<em>trymowanie</em>
						</td>
					</tr>
					<tr>
						<td>jack/parson russell terrier szorstkowłosy, beagle</td>
						<td style={{width:' 35%; text-align: center;'}}>100 zł</td>
					</tr>
					<tr>
						<td>cairn terrier, border terrier, gryfonik brukselski, jamnik szorstkowłosy miniaturowy</td>
						<td style={{width: '35%; text-align: center;'}}>120 zł</td>
					</tr>
					<tr>
						<td>jamnik długowłosy standardowy, cavalier king charles spaniel</td>
						<td style={{width: '35%; text-align: center;'}}>140-150 zł</td>
					</tr>
					<tr>
						<td>
							springer spaniel angielski, cocker spaniel angielski, seter, golden retriever, flat coated retriever
						</td>
						<td style={{width: '35%; text-align: center;'}}>150-200 zł</td>
					</tr>
					<tr>
						<td>lagotto romagnolo, barbet, akita</td>
						<td style={{width: '35%; text-align: center;'}}>200 zł</td>
					</tr>
					<tr>
						<td>owczarek niemiecki krótkowłosy</td>
						<td style={{width: '35%; text-align: center;'}}>140 zł</td>
					</tr>
					
					<tr>
						<td>buldożek francuski, mops, toy rosyjski długowłosy, papillon</td>
						<td style={{width: '35%; text-align: center;'}}>80 zł</td>
					</tr>
				</tbody>
			</table>
			</div>
		</>
	)
}

export default PriceList

