import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'

const RegisterAprendiz = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Registro de Aprendiz</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Por favor ingrese los siguientes datos para realizar el registro del aprendiz
            </p>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <CCol md={6}>
                <CFormLabel htmlFor="Usernames">Nombres</CFormLabel>
                <CFormInput type="text" id="Usernames" required />
                <CFormFeedback invalid>{validated ? 'Ingresa tus nombres' : ''}</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="Surnames">Apellidos</CFormLabel>
                <CFormInput type="text" id="Surnames" required />
                <CFormFeedback invalid>{validated ? 'Ingresa tus apellidos' : ''}</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="emailUser">Correo Electronico</CFormLabel>
                <CFormInput type="email" id="emailUser" required />
                <CFormFeedback invalid>
                  {validated ? 'Ingresa tu correo electronico' : ''}
                </CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="emailInstitutional">Correo Institucional</CFormLabel>
                <CFormInput type="email" id="emailInstitutional" required />
                <CFormFeedback invalid>
                  {' '}
                  {validated ? 'Ingresa tu correo electronico' : ''}
                </CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="documentNumber">Numero de Documento</CFormLabel>
                <CFormInput type="number" id="documentNumber" required />
                <CFormFeedback valid>Listo!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="telephone">Numero de Celular</CFormLabel>
                <CFormInput type="number" id="telephone" required />
                <CFormFeedback valid>Listo!</CFormFeedback>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="validationSex">Sexo</CFormLabel>
                <CFormSelect id="validationSex">
                  <option value=" ">Seleccionar...</option>
                  <option>...</option>
                </CFormSelect>
                <CFormFeedback invalid>Listo!</CFormFeedback>
              </CCol>
              <CCol xs={12}>
                <CFormCheck
                  type="checkbox"
                  id="invalidCheck"
                  label="Agree to terms and conditions"
                  required
                />
                <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
              </CCol>
              <CCol xs={12}>
                <CButton color="primary" type="submit">
                  Registrar Aprendiz
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RegisterAprendiz
