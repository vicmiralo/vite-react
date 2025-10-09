import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        "Desarrollo de Sistema de Reconocimiento de Movimientos de la Mano mediante Señales EMG y NanoEdge AI",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {/* Logo Universidad de Sevilla - Arriba */}
          <img
            src="/logo-us.png"
            alt="Universidad de Sevilla"
            className="w-60 h-60 object-contain"
          />

          {/* Título principal */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-blue-900">
              NanoEdgEMG: Sistema de Reconocimiento EMG con IA Embebida
            </h1>
            <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Información del autor */}
          <div className="text-center space-y-3 text-lg">
            <p className="font-semibold text-xl">Víctor Miranda Alonso</p>
            <p className="text-gray-700">
              Tutores: Ángel Francisco Jiménez Fernández
            </p>
            <p className="text-gray-700">Manuel Jesús Domínguez Morales</p>
          </div>

          {/* Información académica */}
          <div className="text-center text-gray-600">
            <p>Grado en Ingeniería Informática</p>
            <p>Ingeniería de Computadores</p>
            <p className="font-semibold mt-2">
              Universidad de Sevilla • Octubre 2025
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Índice",
      content: (
        <div className="flex flex-col justify-center h-full space-y-6 px-8">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            Índice de Contenidos
          </h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto mb-6"></div>

          <div className="grid grid-cols-2 gap-4">
            {/* Columna izquierda - Apartados 1-7 */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </span>
                  <span className="font-semibold text-gray-800">
                    Contexto y Motivación
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg shadow-md border-l-4 border-purple-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </span>
                  <span className="font-semibold text-gray-800">
                    Objetivos del Proyecto
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg shadow-md border-l-4 border-red-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </span>
                  <span className="font-semibold text-gray-800">
                    Estado del Arte
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg shadow-md border-l-4 border-green-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </span>
                  <span className="font-semibold text-gray-800">
                    Herramientas de ML Embebido
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg shadow-md border-l-4 border-yellow-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    5
                  </span>
                  <span className="font-semibold text-gray-800">
                    NanoEdge AI Studio
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg shadow-md border-l-4 border-indigo-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    6
                  </span>
                  <span className="font-semibold text-gray-800">
                    Hardware Utilizado
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg shadow-md border-l-4 border-pink-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    7
                  </span>
                  <span className="font-semibold text-gray-800">
                    Arquitectura del Sistema
                  </span>
                </div>
              </div>
            </div>

            {/* Columna derecha - Apartados 8-14 */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-4 rounded-lg shadow-md border-l-4 border-cyan-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    8
                  </span>
                  <span className="font-semibold text-gray-800">
                    Captación de Datos
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg shadow-md border-l-4 border-orange-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    9
                  </span>
                  <span className="font-semibold text-gray-800">
                    Entrenamiento del Modelo
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    10
                  </span>
                  <span className="font-semibold text-gray-800">
                    Firmware de Clasificación
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-lime-50 to-lime-100 p-4 rounded-lg shadow-md border-l-4 border-lime-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-lime-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    11
                  </span>
                  <span className="font-semibold text-gray-800">
                    Resultados Experimentales
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg shadow-md border-l-4 border-amber-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    12
                  </span>
                  <span className="font-semibold text-gray-800">
                    Propuestas de Mejora
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-4 rounded-lg shadow-md border-l-4 border-violet-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    13
                  </span>
                  <span className="font-semibold text-gray-800">
                    Conclusiones y ODS
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-rose-100 p-4 rounded-lg shadow-md border-l-4 border-rose-600">
                <div className="flex items-center space-x-3">
                  <span className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    14
                  </span>
                  <span className="font-semibold text-gray-800">
                    Demostración Práctica
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Contexto y Motivación",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            ¿Por qué este proyecto?
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-lg mb-2">
                La electromiografía (EMG) registra la actividad eléctrica
                muscular
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold text-blue-700 mb-3">
                Aplicaciones crecientes en:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prótesis inteligentes y control protésico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Rehabilitación motora y biofeedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Interfaces humano-máquina avanzadas</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <p className="font-semibold">Democratización tecnológica:</p>
              <p className="mt-2">
                Sensores de bajo coste + IA embebida = Sistemas accesibles,
                portátiles y de respuesta inmediata
              </p>
            </div>

            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <br />
              <img
                src="/introduccion.png"
                alt="Imagen orientativa de la captación de señales EMG superficiales mediante banda elástica y visualización en ordenador."
                className="w-65 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Objetivos del Proyecto",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Objetivo General</h3>
            <p className="text-lg leading-relaxed">
              Desarrollar un sistema embebido capaz de identificar tres gestos
              musculares (mano abierta, cerrada y rotación de muñeca) y
              reproducirlos mediante un actuador robótico
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Objetivos Específicos
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span className="text-sm">
                  Diseñar sistema de adquisición EMG superficial
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span className="text-sm">
                  Programar STM32 para gestión de señales
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span className="text-sm">
                  Entrenar modelo IA con NanoEdge AI Studio
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">4.</span>
                <span className="text-sm">
                  Integrar librería y clasificar en tiempo real
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">5.</span>
                <span className="text-sm">
                  Controlar actuador según gesto reconocido
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold">6.</span>
                <span className="text-sm">
                  Evaluar precisión, latencia y adaptabilidad
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Estado del Arte - Aplicaciones EMG",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Principales campos de aplicación
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Rehabilitación motora */}

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <img
                  src="/rehabilitacion.jpg"
                  alt="Rehabilitación motora"
                  className="w-50 h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="font-bold text-lg text-purple-800 mb-2">
                  Rehabilitación motora
                </h4>
                <p className="text-sm">
                  Biofeedback en fisioterapia y monitorización en tiempo real
                </p>
              </div>
            </div>

            {/* Control protésico */}
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <img
                  src="/protesis.jpg"
                  alt="Control protésico"
                  className="w-70 h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="font-bold text-lg text-red-800 mb-2">
                  Control protésico
                </h4>
                <p className="text-sm">
                  Prótesis mioeléctricas con movimientos naturales e intuitivos
                </p>
              </div>
            </div>

            {/* Interfaces HMI */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <img
                  src="/hmi.jpg"
                  alt="Interfaces HMI"
                  className="w-70 h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="font-bold text-lg text-blue-800 mb-2">
                  Interfaces HMI
                </h4>
                <p className="text-sm">
                  Control de drones, realidad virtual (ej: Myo Armband)
                </p>
              </div>
            </div>

            {/* Robótica asistiva */}
            <div className="bg-green-50 p-4 rounded-lg  border-l-4 border-green-600">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <img
                  src="/robotica.jpg"
                  alt="Robótica asistiva"
                  className="w-70 h-40 object-cover text crounded-lg mb-3"
                />
                <h4 className="font-bold text-lg text-green-800 mb-2">
                  Robótica asistiva
                </h4>
                <p className="text-sm">
                  Exoesqueletos y órtesis activas para apoyo motor
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-400 mt-6">
            <p className="font-semibold text-center text-lg">
              Reto actual: Procesamiento en tiempo real con recursos limitados
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Herramientas de ML Embebido",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Comparativa de plataformas
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 text-left">Herramienta</th>
                  <th className="p-3 text-left">Ventajas</th>
                  <th className="p-3 text-left">Limitaciones</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b hover:bg-blue-50">
                  <td className="p-3 font-semibold">Edge Impulse</td>
                  <td className="p-3">Interfaz intuitiva, comunidad activa</td>
                  <td className="p-3">Dependencia de internet</td>
                </tr>
                <tr className="border-b hover:bg-blue-50">
                  <td className="p-3 font-semibold">Qeexo AutoML</td>
                  <td className="p-3">Rápido prototipado</td>
                  <td className="p-3">Funciones comerciales</td>
                </tr>
                <tr className="border-b hover:bg-blue-50">
                  <td className="p-3 font-semibold">TensorFlow Lite</td>
                  <td className="p-3">Muy flexible, arquitecturas avanzadas</td>
                  <td className="p-3">Requiere conocimientos profundos</td>
                </tr>
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="p-3 font-bold text-green-800">
                    NanoEdge AI Studio
                  </td>
                  <td className="p-3 font-semibold">
                    Offline, optimizado STM32, bajo consumo
                  </td>
                  <td className="p-3">Menos personalización</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-100 p-4 rounded-lg border-2 border-green-600 mt-4">
            <p className="font-bold text-green-900 text-center text-lg">
              Elección: NanoEdge AI Studio por integración nativa con STM32 y
              optimización para tiempo real
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <br />
            <img
              src="/nano.jpg"
              alt="Imagen de NanoEdge AI Studio"
              className="w-65 h-60 object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "¿Por qué NanoEdge AI Studio?",
      content: (
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Ventajas clave para este proyecto
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🚀</span>
                <p className="font-semibold">
                  Sin codificación manual del modelo IA
                </p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">📡</span>
                <p className="font-semibold">
                  Entrenamiento offline (independiente de conexión)
                </p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">⚡</span>
                <p className="font-semibold">
                  Exportación directa a C para STM32CubeIDE
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">💾</span>
                <p className="font-semibold">
                  Bajo consumo: RAM 1.3 KB, Flash 5.1 KB
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-2">
              🤖 AutoML: 13,500+ librerías probadas automáticamente
            </p>
            <p className="text-sm">
              Estudio comparativo (Pomares et al., 2023): 1º puesto en criterios
              industriales + académicos
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="font-semibold text-lg">
              Tipo de proyecto usado:{" "}
              <span className="text-blue-600">N-Classify</span>
            </p>
            <p className="text-sm text-gray-700 mt-1">
              (Clasificación supervisada de 3 clases)
            </p>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <img
              src="/modelos.png"
              alt="Imagen de modelos de NanoEdge AI Studio"
              className="w-65 h-65 object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hardware Utilizado",
      content: (
        <div className="space-y-5">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-5 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-2">
              Diagrama de bloques general del sistema desarrollado
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <img
              src="/materiales hw.png"
              alt="Hardware utilizado"
              className="w-65 h-65 object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-3">
                <p className="font-semibold">STM32 Nucleo-L476RG</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-3xl"></span>
                <p className="font-semibold">Sensor EMG AD8232</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-3">
                <p className="font-semibold">Servomotor SG90</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-3">
                <p className="font-semibold">
                  Electrodos de superficie, protoboard y cables dupont
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Hardware Utilizado",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Montaje real con sus respectivas conexiones.
          </h2>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <br />
            <img
              src="/montajeReal.png"
              alt="Hardware utilizado"
              className="w-65 h-65 object-contain"
            />
          </div>
        </div>
      ),
    },
    /* {
      title: "Hardware Utilizado",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Diagrama de bloques del prototipo.
          </h2>
          <div className="flex flex-col items-center justify-center h-full space-y-6"><br/>
            <img
              src="/prototipado.png"
              alt="Hardware utilizado"
              className="w-65 h-65 object-contain"
            />
          </div>
          
        </div>
      ),
    }, */
    {
      title: "Arquitectura del Sistema",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Diagrama de bloques del prototipo
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-600">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between bg-gradient-to-r from-red-100 to-red-200 p-3 rounded-lg shadow">
                <span className="font-bold">Electrodos</span>
                <span className="text-xl">→</span>
                <span className="text-sm">Captan actividad muscular</span>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-orange-100 to-orange-200 p-3 rounded-lg shadow">
                <span className="font-bold">Sensor AD8232</span>
                <span className="text-xl">→</span>
                <span className="text-sm">Amplificación y filtrado</span>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-yellow-100 to-yellow-200 p-3 rounded-lg shadow">
                <span className="font-bold">STM32 (ADC)</span>
                <span className="text-xl">→</span>
                <span className="text-sm">Digitalización a 80 Hz</span>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-green-100 to-green-200 p-3 rounded-lg shadow">
                <span className="font-bold">Buffer DMA</span>
                <span className="text-xl">→</span>
                <span className="text-sm">Almacenamiento temporal</span>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 p-3 rounded-lg shadow">
                <span className="font-bold">NanoEdge AI</span>
                <span className="text-xl">→</span>
                <span className="text-sm">Clasificación en tiempo real</span>
              </div>
              <div className="flex items-center justify-between bg-gradient-to-r from-purple-100 to-purple-200 p-3 rounded-lg shadow">
                <span className="font-bold">PWM (TIM)</span>
                <span className="text-xl">→</span>
                <span className="text-sm">Control del servomotor</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <p className="font-semibold text-center">
              Señal analógica → Procesamiento → Inferencia IA → Acción mecánica
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Metodología - Captación de Datos",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Proceso de construcción del dataset
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-purple-800 mb-3">
              Firmware Datalogger
            </h3>
            <div className="space-y-2 text-sm">
              <p>• ADC configurado a 80 Hz con trigger por temporizador</p>
              <p>• Captura mediante DMA (Direct Memory Access)</p>
              <p>• Transmisión por USART1 (115200 baudios)</p>
              <p>• Ventanas de 64 muestras</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">✋</div>
              <h4 className="font-bold text-blue-800">Mano abierta</h4>
              <p className="text-xs mt-2">
                Extensión de dedos, activación suave
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">✊</div>
              <h4 className="font-bold text-red-800">Mano cerrada</h4>
              <p className="text-xs mt-2">Contracción intensa de flexores</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-bold text-green-800">Rotación muñeca</h4>
              <p className="text-xs mt-2">Patrón más irregular</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
            <p className="font-semibold text-sm">
              Reto: Variabilidad por posición de electrodos, fatiga, sudoración
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Entrenamiento del Modelo",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            NanoEdge AI Studio - Proceso AutoML
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Proceso de benchmark</h3>
            <p className="text-lg">
              🔍 13,500+ librerías evaluadas en ~58 minutos
            </p>
            <p className="mt-2">
              🎯 Modelo seleccionado:{" "}
              <span className="font-bold">MLP (Multilayer Perceptron)</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="font-bold text-green-800 mb-2">
                Métricas obtenidas
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  📊 Quality Index: <span className="font-bold">98.9</span>
                </p>
                <p>
                  🎯 Balanced Accuracy: <span className="font-bold">99.3%</span>
                </p>
                <p>
                  💾 RAM: <span className="font-bold">1.3 KB</span>
                </p>
                <p>
                  ⚡ Flash: <span className="font-bold">5.1 KB</span>
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h4 className="font-bold text-blue-800 mb-2">
                Matriz de confusión ideal
              </h4>
              <p className="text-sm mb-3">
                Prácticamente perfecta en validación
              </p>
              <div className="bg-green-100 p-3 rounded text-center">
                <p className="font-bold text-green-800">
                  Clasificación casi perfecta en entrenamiento
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <img
              src="/metricas.png"
              alt="Metricas Obtenidos del modelo"
              className="w-50 h-50 object-contain"
            />
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm font-semibold text-center">
              📦 Exportación: Librería C integrada en STM32CubeIDE
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Firmware de Clasificación",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Flujo de funcionamiento
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg shadow">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </span>
              <span className="font-semibold">
                Inicialización de periféricos (ADC, UART, PWM)
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-purple-50 p-3 rounded-lg shadow">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </span>
              <span className="font-semibold">
                Captura continua de 64 muestras (DMA)
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg shadow">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </span>
              <span className="font-semibold">
                Conversión a float y llamada a neai_classification()
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg shadow">
              <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </span>
              <span className="font-semibold">
                Obtención de clase + nivel de confianza
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-4 rounded-lg shadow-md border-l-4 border-red-600">
            <h4 className="font-bold text-red-800 mb-2">
              Acción sobre servomotor:
            </h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Mano abierta</p>
                <p className="text-blue-600">→ 0°</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Mano cerrada</p>
                <p className="text-red-600">→ 90°</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Rotación muñeca</p>
                <p className="text-green-600">→ 180°</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600">
            <p className="font-semibold text-sm">
              📊 Sistema de consenso: votación sobre 2.5s para estabilidad
              (umbral 25%)
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Resultados Experimentales",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Precisión por gesto
          </h2>
          <div className="space-y-3">
            <div className="bg-green-50 p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-green-800 text-lg">
                    Mano abierta
                  </h4>
                  <p className="text-sm mt-1">Clasificación muy robusta</p>
                </div>
                <div className="text-3xl font-bold text-green-700">~100%</div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-blue-800 text-lg">
                    Mano cerrada
                  </h4>
                  <p className="text-sm mt-1">
                    Ocasional confusión con apertura
                  </p>
                </div>
                <div className="text-3xl font-bold text-blue-700">~98%</div>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-l-4 border-yellow-600">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-yellow-800 text-lg">
                    Rotación muñeca
                  </h4>
                  <p className="text-sm mt-1">Mayor sensibilidad al ruido</p>
                </div>
                <div className="text-3xl font-bold text-yellow-700">~81%</div>
              </div>
            </div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow-md border-l-4 border-red-800">
            <h4 className="font-bold text-gray-800 mb-2">
              Factores de variabilidad:
            </h4>
            <p className="font-bold text-red-800 text-lg">
              Posición electrodos • Fatiga muscular • Intensidad contracción
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg border-2 border-blue-600">
            <p className="font-semibold text-center">
              Mejora implementada: sistema de consenso reduce cambios espurios
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Propuestas de Mejora",
      content: (
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Líneas futuras de trabajo
          </h2>
          
          {/* Mejoras en Hardware */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-800 mb-3 flex items-center space-x-2">
              <span className="text-2xl">🔧</span>
              <span>Mejoras en Hardware</span>
            </h3>
            <ul className="space-y-2 text-sm ml-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Electrodos más precisos con fijaciones robustas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Filtros hardware adicionales para mejorar relación señal/ruido</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Múltiples canales de captación simultáneos</span>
              </li>
            </ul>
          </div>
    
          {/* Mejoras en Software */}
          <div className="bg-purple-50 p-4 rounded-lg shadow-md border-l-4 border-purple-600">
            <h3 className="font-bold text-purple-800 mb-3 flex items-center space-x-2">
              <span className="text-2xl">💻</span>
              <span>Mejoras en Software</span>
            </h3>
            <ul className="space-y-2 text-sm ml-6">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Normalización adaptativa que se ajuste a cada usuario en tiempo real</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Sistema de consenso optimizado para reducir falsos positivos</span>
              </li>
            </ul>
          </div>
    
          {/* Entrenamiento Incremental - Destacado */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-lg shadow-lg border-2 border-red-600">
            <h3 className="font-bold text-red-800 mb-4 flex items-center space-x-2 text-xl">
              <span className="text-3xl">⭐</span>
              <span>Entrenamiento Incremental por Fases</span>
            </h3>
            
            {/* Fases del entrenamiento incremental */}
            <div className="flex items-center justify-between mb-4 space-x-2">
              <div className="flex-1 bg-white p-3 rounded-lg shadow-md text-center">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  1
                </div>
                <p className="text-xs font-semibold text-gray-800">
                  Entrenar con 2 gestos diferenciados
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  (Mano abierta/cerrada)
                </p>
              </div>
              
              <div className="text-3xl text-red-600 font-bold">→</div>
              
              <div className="flex-1 bg-white p-3 rounded-lg shadow-md text-center">
                <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  2
                </div>
                <p className="text-xs font-semibold text-gray-800">
                  Validar modelo base
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  (≈100% precisión)
                </p>
              </div>
              
              <div className="text-3xl text-red-600 font-bold">→</div>
              
              <div className="flex-1 bg-white p-3 rounded-lg shadow-md text-center">
                <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  3
                </div>
                <p className="text-xs font-semibold text-gray-800">
                  Incorporar 3º gesto
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  (Rotación muñeca)
                </p>
              </div>
            </div>
    
            {/* Ventajas */}
            <div className="bg-green-100 p-3 rounded-lg border-l-4 border-green-600">
              <p className="text-sm">
                <span className="font-bold text-green-800">Ventajas:</span>
                <span className="text-gray-800"> Reduce confusión entre clases similares | Facilita debugging temprano | Escalable a más gestos | Aprendizaje progresivo más robusto</span>
              </p>
            </div>
          </div>
    
          {/* Nota final */}
          <div className="bg-blue-100 p-3 rounded-lg border-2 border-blue-600">
            <p className="font-semibold text-center text-blue-900">
              📈 Esta estrategia permitiría extender el sistema a 4, 5 o más gestos de forma controlada
            </p>
          </div>
        </div>
      ),
    },

    {
      title: "Cronograma y Presupuesto",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-blue-800 mb-3 text-lg">
                Distribución temporal
              </h3>
              <div className="text-center mb-3">
                <span className="text-3xl font-bold text-blue-600">
                  420 horas
                </span>
                <p className="text-sm text-gray-600">totales del proyecto</p>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Estudio EMG y hardware</span>
                  <span className="font-bold">40h</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Montaje y pruebas</span>
                  <span className="font-bold">70h</span>
                </div>
                <div className="flex justify-between bg-blue-100 p-2 rounded">
                  <span className="font-semibold">Captura y etiquetado</span>
                  <span className="font-bold">100h</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Entrenamiento IA</span>
                  <span className="font-bold">60h</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Integración firmware</span>
                  <span className="font-bold">30h</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Pruebas con servo</span>
                  <span className="font-bold">20h</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Evaluación resultados</span>
                  <span className="font-bold">15h</span>
                </div>
                <div className="flex justify-between bg-gray-50 p-2 rounded">
                  <span>Redacción memoria</span>
                  <span className="font-bold">85h</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-green-800 mb-3 text-lg">
                Presupuesto
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">Materiales</p>
                  <p className="text-2xl font-bold text-green-700">~53€</p>
                  <p className="text-xs text-gray-600 mt-1">Muy bajo coste</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Horas trabajo (420h × 20€/h)
                  </p>
                  <p className="text-2xl font-bold text-blue-700">~8,400€</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-600">
                  <p className="text-sm font-semibold text-purple-800">
                    Potencial comercial
                  </p>
                  <p className="text-lg font-bold text-purple-700">
                    Kit educativo: 100-150€
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Conclusiones y Alineación ODS",
      content: (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Logros principales
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 p-3 rounded-lg shadow-md flex items-start space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-sm font-semibold">
                Sistema funcional de clasificación EMG en tiempo real
              </span>
            </div>
            <div className="bg-green-50 p-3 rounded-lg shadow-md flex items-start space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-sm font-semibold">
                Bajo coste, compacto y replicable
              </span>
            </div>
            <div className="bg-green-50 p-3 rounded-lg shadow-md flex items-start space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-sm font-semibold">
                Integración exitosa STM32 + NanoEdge AI
              </span>
            </div>
            <div className="bg-green-50 p-3 rounded-lg shadow-md flex items-start space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <span className="text-sm font-semibold">
                Precisión aceptable (mano abierta/cerrada mayor 98%)
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-3">
              Contribución a los Objetivos de Desarrollo Sostenible
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-white bg-opacity-20 p-2 rounded">
                <p className="font-bold">ODS 3: Salud y bienestar</p>
                <p className="text-xs">
                  Rehabilitación y mejora calidad de vida
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded">
                <p className="font-bold">ODS 4: Educación de calidad</p>
                <p className="text-xs">Prototipo docente accesible</p>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded">
                <p className="font-bold">ODS 9: Innovación</p>
                <p className="text-xs">IA embebida en bajo consumo</p>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded">
                <p className="font-bold">ODS 10: Reducción desigualdades</p>
                <p className="text-xs">Tecnología biomédica accesible</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Demostración Práctica",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h2 className="text-4xl font-bold text-blue-800 text-center">
            Verificación del sistema en funcionamiento
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg shadow-2xl max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              A continuación se presenta un vídeo demostrativo
            </h3>
            <div className="space-y-3 text-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <span>Captación de señales EMG en tiempo real</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🤖</span>
                <span>Clasificación de los tres gestos</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚙️</span>
                <span>
                  Respuesta del servomotor según el movimiento detectado
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💻</span>
                <span>Salida por consola con nivel de confianza</span>
              </div>
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1cVzsvyxQDFD1272_Sp5rj0AJay5A29EA/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-100 p-6 rounded-lg border-4 border-yellow-400 text-center hover:bg-yellow-200 transition-all cursor-pointer"
          >
            <p className="text-2xl font-bold text-yellow-900">
              🎬 REPRODUCIR VÍDEO
            </p>
          </a>
        </div>
      ),
    },
    {
      title: "Gracias por su atención",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h1 className="text-5xl font-bold text-blue-900 text-center">
            ¿Preguntas?
          </h1>
          <div className="w-32 h-1 bg-blue-600"></div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-2xl max-w-2xl text-center">
            <p className="text-2xl font-bold mb-4">Víctor Miranda Alonso</p>
            <p className="text-lg mb-2">Grado en Ingeniería Informática</p>
            <p className="text-lg">Ingeniería de Computadores</p>
            <p className="text-lg mt-4">Universidad de Sevilla • 2025</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <p className="font-semibold text-gray-700 mb-2">
              Repositorio GitHub:
            </p>
            <p className="text-blue-600 font-mono text-sm">
              github.com/vicmiralo/NanoEdgEMG
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="bg-white w-[95%] h-[95vh] max-w-[1800px] rounded-lg shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-1 p-12 overflow-y-auto">
          {slides[currentSlide].content}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
            <span>Anterior</span>
          </button>

          <div className="text-center">
            <p className="text-sm font-semibold">
              {slides[currentSlide].title}
            </p>
            <p className="text-xs mt-1">
              Diapositiva {currentSlide + 1} de {slides.length}
            </p>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <span>Siguiente</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
