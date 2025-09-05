import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Group() {
  const [groupList, setGroupList] = useState([])
  const [userList, setUserList] = useState([])
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axiosInstance.get('/groups')
        setGroupList(response.data)
        console.log('Fetched groups:', response.data)
      } catch (error) {
        console.error('Error fetching groups:', error)
      }
    }

    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/auth/users')
        setUserList(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchGroups()
    fetchUsers()
  }, [])
  const handleOnclickGroup = (groupId) => {
    // navigate(`/groups/${groupId}`)
    console.log('Group ID clicked:', groupId)
  }

  return (
    <>
      <div>CREATE A GROUP</div>
      <form>
        <label htmlFor="groupName">Group Name:</label>
        <input type="text" id="groupName" name="groupName" required />
        <br />
        <label htmlFor="members">Add Members:</label>
        <select id="members" name="members" multiple>
          {Object.entries(userList).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} {user.email}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Create Group</button>
      </form>

      <h2>Your Groups</h2>
      <ul>
        {Object.entries(groupList).map((group) => (
          <div key={group.id}>
            <p>{group.name}</p>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Group
