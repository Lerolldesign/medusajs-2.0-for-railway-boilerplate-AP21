import { useRouter } from "next/navigation"
import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react"
import { UseSearchBoxProps, useSearchBox } from "react-instantsearch-hooks-web"

export type ControlledSearchBoxProps = React.ComponentProps<"div"> & {
  inputRef: RefObject<HTMLInputElement>
  onChange(event: ChangeEvent): void
  onReset(event: FormEvent): void
  onSubmit?(event: FormEvent): void
  placeholder?: string
  value: string
}

type SearchBoxProps = {
  children: (state: {
    value: string
    inputRef: RefObject<HTMLInputElement>
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onReset: () => void
    onSubmit: () => void
    placeholder: string
  }) => React.ReactNode
  placeholder?: string
} & UseSearchBoxProps

const SearchBoxWrapper = ({
  children,
  placeholder = "Search products...",
  ...rest
}: SearchBoxProps) => {
  const { query, refine } = useSearchBox(rest)
  const [value, setValue] = useState(query)
  const inputRef = useRef<HTMLInputElement>(
    null
  ) as React.RefObject<HTMLInputElement>

  const router = useRouter()

  const onReset = () => {
    setValue("")
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const onSubmit = () => {
    if (value) {
      router.push(`/results/${value}`)
    }
  }

  useEffect(() => {
    if (query !== value) {
      refine(value)
    }
  }, [value])

  useEffect(() => {
    if (document.activeElement !== inputRef.current && query !== value) {
      setValue(query)
    }
  }, [query])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const state = {
    value,
    inputRef,
    onChange,
    onSubmit,
    onReset,
    placeholder,
  }

  return children(state)
}

SearchBoxWrapper.displayName = "SearchBoxWrapper"

export default SearchBoxWrapper
