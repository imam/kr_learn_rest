const {faker_seed} = require('../../seeds/users')

describe('Faker seed for user', () =>{
	test('Should return correct array', () => {
		const faker = {
			name: {
				findName() {
					return 'Imam'
				}
			},
			random: {
				number({min, max}) {
					return 21
				}
			}
		}	
		expect(faker_seed(faker, 2)).toEqual([{
			name: 'Imam', 
			age: 21
		},{
			name: 'Imam',
			age: 21
		}])
	})
})