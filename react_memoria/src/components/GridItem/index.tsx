import { GridItemType } from '../../types/GridTypes'
import * as C from './styles'

type Props = {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
  return (
    <C.Container onClick={onClick}>
      ...
    </C.Container>
  )
}