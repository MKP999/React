import React, { useState, useEffect} from 'react'
import { Table, Space, Button, Input, message } from 'antd';
import { getCourseList, deleteCourse } from '../../server/courseApi'
import { history, Link } from "umi";

const index = () => {
  const [ data, setData ] = useState([])
  const [ keywords, setKeywords ] = useState('')

  useEffect(() => {
    getList()
  }, [keywords])

  const getList = () => {
    getCourseList({keywords}).then(res => {
      setData(res.data.datas)
    })
  }

  const handleDelte = (id: any) => {
    console.log(id)
    deleteCourse({id}).then(res => {
      if (res.data.success) {
        message.success(res.data.msg)
        getList()
      } else {
        message.error(res.data.msg)
      }
    })
  }

  const columns = [
    {
      title: '课程类别',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '课程总价',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: '课程数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '课程地址',
      dataIndex: 'address',
      key: 'address',
      render: (text: string) => (
        <>
          <a target="blank" href={text}>
            查看课程
          </a>
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
       render: (record: {id: string}) => (
        <Space size="middle">
          <Link to={`/course/add?id=${record.id}`}>编辑</Link>
          <a onClick={() => handleDelte(record.id)}>删除</a>
        </Space>
      )
    },
  ]

  const { Search } = Input
  const onSearch = (e: string) => {
    setKeywords(e)
  }

  const handleAdd = () => {
    history.push('/course/add')
  }

  return (
    <div>
      <Button type="primary" onClick={() => handleAdd()}>添加课程</Button>
      <Search placeholder="请输入课程名称" onSearch={onSearch} enterButton style={{ width: 400 }} />
      <Table columns={columns} dataSource={data} rowKey={(data:{id: string}) => data.id} />
    </div>
  )
}

export default index