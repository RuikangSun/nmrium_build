import type { InnerWorkspace } from '@zakodium/nmrium-core';

export const exercise: InnerWorkspace = {
  label: 'Exercise',
  display: {
    general: {
      hideGeneralSettings: true,
      hideLogs: true,
      hideWorkspaces: true,
    },
    panels: {
      spectraPanel: { display: true, visible: true, open: true },
      integralsPanel: { display: true, visible: true },
    },
    toolBarButtons: {
      zoom: true,
      zoomOut: true,
      apodization: true,
      zeroFilling: true,
      fft: true,
      phaseCorrection: true,
      baselineCorrection: true,
      peakPicking: true,
      integral: true,
      spectraCenterAlignments: true,
      spectraStackAlignments: true,
      fftDimension1: true,
      fftDimension2: true,
    },
  },
  general: {
    dimmedSpectraOpacity: 0.4,
    verticalSplitterPosition: '440px',
    verticalSplitterCloseThreshold: 600,
    spectraRendering: 'auto',
    loggingLevel: 'info',
    popupLoggingLevel: 'error',
    invert: true,
    invertScroll: false,
  },
  nuclei: [],
  panels: {
    integrals: {
      nuclei: {
        '1H': {
          showSerialNumber: true,
          relative: { show: true, format: '0.00' },
          absolute: { show: false, format: '0.00' },
          from: { show: true, format: '0.00' },
          to: { show: true, format: '0.00' },
          color: 'black',
          strokeWidth: 1,
          showKind: false,
          showDeleteAction: true,
          isSumConstant: true,
        },
        '13C': {
          showSerialNumber: true,
          relative: { show: true, format: '0.00' },
          absolute: { show: false, format: '0.00' },
          from: { show: true, format: '0.00' },
          to: { show: true, format: '0.00' },
          color: 'black',
          strokeWidth: 1,
          showKind: false,
          showDeleteAction: true,
          isSumConstant: true,
        },
      },
    },
  },
};
