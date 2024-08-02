import { ReactNode } from 'react'

type AccordionItem = { header: string | ReactNode, description: string | ReactNode }

export type AccordionMap = Record<string, AccordionItem>
