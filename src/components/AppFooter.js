import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <Link href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Sena Empresa La Granja
        </Link>
        <span className="ms-1">&copy; 2024 ADSO (Analisis y Desarrollo de Software).</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
