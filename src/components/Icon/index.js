import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'
import FaTrash from 'react-icons/lib/fa/trash'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaCamera from 'react-icons/lib/fa/camera'
import FaEye from 'react-icons/lib/fa/eye'
import FaFloppy from 'react-icons/lib/fa/floppy-o'
import FaCheck from 'react-icons/lib/fa/check'

const icons = {
  plus: FaPlus,
  trash: FaTrash,
  pencil: FaPencil,
  camera: FaCamera,
  eye: FaEye,
  save: FaFloppy,
  check: FaCheck
}

export default function Icon(props) {
  const { name, ...otherProps } = props
  const IconElement = icons[name] || icons['plus']

  return <IconElement {...otherProps} />
}
