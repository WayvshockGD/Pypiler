// PYPiler Builders.cpp : Defines the exported functions for the DLL.
//

#include "pch.h"
#include "framework.h"
#include "PYPiler Builders.h"


// This is an example of an exported variable
PYPILERBUILDERS_API int nPYPilerBuilders=0;

// This is an example of an exported function.
PYPILERBUILDERS_API int fnPYPilerBuilders(void)
{
    return 0;
}

// This is the constructor of a class that has been exported.
CPYPilerBuilders::CPYPilerBuilders()
{
    return;
}
