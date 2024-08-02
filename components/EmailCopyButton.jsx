import React from 'react'
import { AnimatedSubscribeButton } from './ui/subscribedBtn'
import { ConfettiButton } from './ui/animation'
import { Copy } from 'lucide-react'
import { Button } from './ui/button'

const EmailCopyButton = ({email}) => {
  return (
    <AnimatedSubscribeButton
    subscribeStatus={false}
    initialText={
      <ConfettiButton text={email} size="sm">
        <Copy
          size={15}
          className="mr-1 text-secondary-foreground/50"
        />
        Copy Email
      </ConfettiButton>
    }
    changeText={
      <Button variant="outline" size="sm">
        <Copy
          size={15}
          className="mr-1 text-secondary-foreground/50"
        />
        Copied
      </Button>
    }
  />
  )
}

export default EmailCopyButton