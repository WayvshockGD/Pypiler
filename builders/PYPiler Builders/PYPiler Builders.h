// The following ifdef block is the standard way of creating macros which make exporting
// from a DLL simpler. All files within this DLL are compiled with the PYPILERBUILDERS_EXPORTS
// symbol defined on the command line. This symbol should not be defined on any project
// that uses this DLL. This way any other project whose source files include this file see
// PYPILERBUILDERS_API functions as being imported from a DLL, whereas this DLL sees symbols
// defined with this macro as being exported.
#ifdef PYPILERBUILDERS_EXPORTS
#define PYPILERBUILDERS_API __declspec(dllexport)
#else
#define PYPILERBUILDERS_API __declspec(dllimport)
#endif

// This class is exported from the dll
class PYPILERBUILDERS_API CPYPilerBuilders {
public:
	CPYPilerBuilders(void);
	// TODO: add your methods here.
};

extern PYPILERBUILDERS_API int nPYPilerBuilders;

PYPILERBUILDERS_API int fnPYPilerBuilders(void);
