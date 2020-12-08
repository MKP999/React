import React, { useState, useEffect } from 'react'
import { addCourse, getCourseType, getEditCourse, editCourse } from "../../server/courseApi";
import {
    Form,
    Input,
    Button,
    Select,
    InputNumber,
    message
  } from 'antd';
  import { history, useHistory } from "umi";


const index = () => {

    const { location: { query } } = useHistory()
    console.log(query)
    const [form] = Form.useForm();
    const [ typeList, setTypeList ] = useState([])

      const tailLayout = {
        wrapperCol: { offset: 4, span: 16 },
      }

      const onFinish = (e: object) => {
          console.log(e)
          query.id ? editCourse({id: query.id, ...e}).then(res => {
              console.log(res)
              if (res.data.success) {
                message.success(res.data.msg)
                history.go(-1)
              } else {
                message.error(res.data.msg)
              }
          }) : addCourse(e).then(res => {
            console.log(res)
            if (res.data.success) {
              message.success(res.data.msg)
              history.go(-1)
            } else {
              message.error(res.data.msg)
            }
        })
      }
      
      useEffect(() => {
        getCourseType().then(res => {
            setTypeList(res.data.datas)
        })
        query.id ?  getEditCourse({id: query.id}).then(res => {
            console.log(res.data)
            form.setFieldsValue({...res.data.datas}) 
        }) : ''
      }, [])
    return (
        <div>
            <Form

        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: 'default' }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item label="课程名称"
            name="name"
            rules={[{ required: true, message: '请输入课程名称!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="课程类型" name="type">
          <Select>
              {typeList.map((item: {value: string, label: string}) => {
                  return (
                    <Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>
                  )
              })}
          </Select>
        </Form.Item>
        <Form.Item label="课程价格" name="totalPrice" rules={[{ required: true, message: '请输入课程价格!' }]}>
            <Input prefix="￥" suffix="RMB" />
        </Form.Item>
        <Form.Item label="课程数量" name="amount" rules={[{ required: true, message: '请输入课程数量!' }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="课程地址" name="address"  rules={[{ required: true, message: '请输入课程地址!' }]}>
            <Input />
        </Form.Item>
        <Form.Item  {...tailLayout}>
          <Button type="primary" htmlType="submit">确定</Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default index
