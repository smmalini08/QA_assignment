import { test, expect } from '@playwright/test';

test('create, fetch and update user', async ({ request }) => {
 // create user
  const new_user =  await request.post('https://reqres.in/api/users', {
    data: {
      "name": "Malini",
      "job": "leader"
    }
  })

  expect(new_user.ok).toBeTruthy()
  expect(new_user.status()).toBe(201)

  const new_userBody = await new_user.json()
  const user_id = new_userBody.id

  expect(new_userBody).toHaveProperty('name', "Malini" )
  expect(new_userBody).toHaveProperty('job', "leader" )

  // fetch user
  const existing_user_id = 2
  const user = await request.get(`https://reqres.in/api/users/${existing_user_id}`)

  expect(user.ok).toBeTruthy()
  expect(user.status()).toBe(200)
  const userBody = await new_user.json()

  expect(userBody).toHaveProperty('name', "Malini" )
  expect(userBody).toHaveProperty('job', "leader" )

// update user
  const updatedUser =  await request.put(`https://reqres.in/api/users/${existing_user_id}`, {
    data: {
      "name": "Malini SM",
      "job": "leader"
    }
  })

  expect(updatedUser.ok).toBeTruthy()
  expect(updatedUser.status()).toBe(200)
  const updatedUserBody = await updatedUser.json()
  expect(updatedUserBody).toHaveProperty('name', "Malini SM" )
});

