import { Form, Input, Button, Typography } from "antd"
import { useAuthForm } from "../../hooks/useAuthForm"

import styles from "./AuthForm.module.scss"
import { Content } from "antd/es/layout/layout"
import { useState } from "react"

interface AuthFormProps {
  mode: "signin" | "signup"
  title: string
  submitButtonText: string
  linkText: string
  linkAction: () => void
}

function AuthForm({
  mode,
  title,
  submitButtonText,
  linkText,
  linkAction,
}: AuthFormProps) {
  const { handleSubmitSignIn, handleSubmitSignUp } = useAuthForm()
  const [messageError, setMessageError] = useState<string | null>(null)

  const onFinish = (values: { username: string; password: string }) => {
    if (mode === "signin") {
      const message = handleSubmitSignIn(values)
      if (message) {
        setMessageError(message)
      }
    } else {
      const message = handleSubmitSignUp(values)
      if (message) {
        setMessageError(message)
      }
    }
  }

  return (
    <Content className={styles.authForm}>
      <Typography.Title level={2} className={styles.title}>
        {title}
      </Typography.Title>
      {messageError && (
        <Typography.Text type='danger'>{messageError}</Typography.Text>
      )}
      <Form
        layout='vertical'
        name={mode}
        onFinish={onFinish}
        className={styles.form}
      >
        <Form.Item
          label={"Имя пользователя"}
          name='username'
          rules={[{ required: true, message: "Введите имя пользователя" }]}
          className={styles.input}
        >
          <Input placeholder='Имя пользователя' />
        </Form.Item>
        <Form.Item
          label='Пароль'
          name='password'
          rules={[{ required: true, message: "Введите пароль" }]}
          className={styles.input}
        >
          <Input.Password placeholder='Пароль' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className={styles.button}>
            {submitButtonText}
          </Button>
        </Form.Item>
        <Button
          type='link'
          onClick={() => {
            setMessageError(null)
            linkAction()
          }}
          className={styles.button}
        >
          {linkText}
        </Button>
      </Form>
    </Content>
  )
}

export default AuthForm
