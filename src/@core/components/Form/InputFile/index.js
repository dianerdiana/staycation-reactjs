import React, { useRef, useState } from 'react'

import propTypes from 'prop-types'

import './index.scss'

export default function File(props) {
  const [fileName, setFileName] = useState('')
  const {
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName
  } = props

  const onChange = (event) => {
    setFileName(event.target.value)
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files
      }
    })
  }

  const refInputFile = useRef(null)

  return (
    <div className={['input-text mb-3', outerClassName].join(' ')}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={fileName}
          onChange={onChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={fileName}
          placeholder={placeholder}
          className={['form-control', inputClassName].join(' ')}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  )
}

File.defaultProps = {
  placeholder: 'Browse a file...'
}

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string
}
