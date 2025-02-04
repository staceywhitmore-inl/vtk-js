title: Examples
---

<style>
  .categories {
    columns: 2 200px;
    column-gap: 1rem;
  }

  .category {
    break-inside: avoid;
    display: inline-block;
    width: 100%;
  }

  .categories br {
    display: none;
  }

  .category ul {
    margin-top: 0;
  }

  .gallery img {
    width: 32%;
    display: inline-block;
    padding: 2px;
  }

  .gallery br {
    display: none;
  }
</style>

This will allow you to see the some live code running in your browser. Just pick a class on the left menu or in the category grouping below. The [Simple Cone](SimpleCone.html) is a good example to start with if you are new to VTK.

<div class="gallery">

[![PDBReader Example][PDBReader]](./PDBReader.html "PDBReader Example")
[![ElevationReader Example][ElevationReader]](./ElevationReader.html)
[![VolumeContour Example][VolumeContour]](./VolumeContour.html)
[![MultiSliceImageMapper Example][MultiSliceImageMapper]](./MultiSliceImageMapper.html)
[![PiecewiseGaussianWidget Example][PiecewiseGaussianWidget]](./PiecewiseGaussianWidget.html)
[![ZipHttpReader Example][ZipHttpReader]](./ZipHttpReader.html)

</div>

[ElevationReader]: ../docs/gallery/ElevationReader.jpg
[MultiSliceImageMapper]: ../docs/gallery/MultiSliceImageMapper.jpg
[PDBReader]: ../docs/gallery/PDBReader.jpg
[PiecewiseGaussianWidget]: ../docs/gallery/PiecewiseGaussianWidget.jpg
[VolumeContour]: ../docs/gallery/VolumeContour.jpg
[ZipHttpReader]: ../docs/gallery/ZipHttpReader.jpg

## Applications

<div class="gallery">

[![GeometryViewer Example][GeometryViewerBrainBloodVessels]](./GeometryViewer.html "Load and visualize meshes")
[![OBJViewerFerrari Example][OBJViewerFerrari]](./OBJViewer.html "Load OBJ files with textures")
[![SceneExplorer Example][SceneExplorerVesselWithStreamlines]](./SceneExplorer.html "Load exported ParaView scenes")
[![SkyboxViewer Example][SkyboxViewer]](./SkyboxViewer.html "Skybox with VR support")
[![VolumeViewer Example][VolumeViewer]](./VolumeViewer.html "Load and visualize volumes")

</div>

[GeometryViewerBrainBloodVessels]: ../docs/gallery/GeometryViewerBrainBloodVessels2.jpg
[OBJViewerFerrari]: ../docs/gallery/OBJViewerFerrari.jpg
[SceneExplorerVesselWithStreamlines]: ../docs/gallery/SceneExplorerVesselWithStreamlines.jpg
[SkyboxViewer]: ../docs/gallery/SkyboxViewer.jpg
[VolumeViewer]: ../docs/gallery/VolumeViewer.jpg

## Geometry

<div class="gallery">

[![AR Example][AR]](./AR.html "AR with WebXR")
[![Cone Example][Cone]](./Cone.html "Cone source")
[![CubeAxes Example][CubeAxes]](./CubeAxes.html "Cube axes around an actor")
[![DepthTest Example][DepthTest]](./DepthTest.html "Capture and render the depth buffer of the scene")
[![GlyphRotation Example][GlyphRotation]](./GlyphRotation.html "Apply rotations on the glyph mapper")
[![LookingGlass Example][LookingGlass]](./LookingGlass.html "Render scene into a LookingGlass device")
[![Texture Example][Texture]](./Texture.html "Apply a texture on a sphere")
[![TimeSeries Example][TimeSeries]](./TimeSeries.html "Time based dataset")
[![VR Example][VR]](./VR.html "VR with WebXR")

</div>

[AR]: ../docs/gallery/ArCone.jpg
[Cone]: ../docs/gallery/Cone.jpg
[CubeAxes]: ../docs/gallery/CubeAxes.jpg
[DepthTest]: ../docs/gallery/DepthTest.jpg
[GlyphRotation]: ../docs/gallery/GlyphRotation.jpg
[LookingGlass]: ../docs/gallery/LookingGlassCone.png
[Texture]: ../docs/gallery/Texture.jpg
[TimeSeries]: ../docs/gallery/TimeSeries.gif
[VR]: ../docs/gallery/VrCone.jpg

## IO

<div class="gallery">

[![DracoReader Example][DracoReader]](./DracoReader.html "Draco reader(drc)")
[![PLYReader Example][PLYReader]](./PLYReader.html "PLY reader(ply)")
[![PLYWriter Example][PLYWriter]](./PLYWriter.html "PLY writer(ply)")
[![STLReader Example][STLReader]](./STLReader.html "STL reader(stl)")
[![STLWriter Example][STLWriter]](./STLWriter.html "STL writer(stl)")
[![PolyDataReader Example][PolyDataReader]](./PolyDataReader.html "VTK legacy reader(VTK)")
[![ElevationReader Example][ElevationReader]](./ElevationReader.html "Elevation reader(CSV, JPG)")
[![OBJReader Example][OBJReaderWithIcon]](./OBJReader.html "OBJ reader(OBJ, MTL, JPG)")
[![PDBReader Example][PDBReaderWithIcon]](./PDBReader.html "PDB reader(OBJ, MTL, JPG)")
[![XMLImageDataWriter Example][XMLImageDataWriter]](./XMLImageDataWriter.html "ImageData XML writer(VTI)")
[![XMLPolyDataDataWriter Example][XMLPolyDataWriter]](./XMLPolyDataWriter.html "PolyData XML writer(VTP)")
[![ZipHttpReader Example][ZipHttpReaderWithIcon]](./ZipHttpReader.html "ZIP http reader(ZIP)")

</div>

[DracoReader]: ../docs/gallery/DracoReaderWithIcon.jpg
[PLYReader]: ../docs/gallery/PLYReaderWithIcon.jpg
[PLYWriter]: ../docs/gallery/PLYWriterWithIcon.jpg
[STLReader]: ../docs/gallery/STLReaderWithIcon.jpg
[STLWriter]: ../docs/gallery/STLWriterWithIcon.jpg
[PolyDataReader]: ../docs/gallery/VTKReaderWithIcon.jpg
[ElevationReader]: ../docs/gallery/ElevationReaderWithIcon.jpg
[OBJReaderWithIcon]: ../docs/gallery/OBJReaderWithIcon.jpg
[PDBReaderWithIcon]: ../docs/gallery/PDBReaderWithIcon.jpg
[XMLImageDataWriter]: ../docs/gallery/XMLImageDataWriterWithIcon.jpg
[XMLPolyDataWriter]: ../docs/gallery/XMLPolyDataWriterWithIcon.jpg
[ZipHttpReaderWithIcon]: ../docs/gallery/ZipHttpReaderWithIcon.jpg

## Rendering

<div class="gallery">

[![ImageMapper Example][ImageMapper]](./ImageMapper.html "2D orthogonal axis image mapper")
[![ImageResliceMapper Example][ImageResliceMapper]](./ImageResliceMapper.html "GPU 2D reslice/oblique/MPR mapper")
[![ImageCPRMapper Example][ImageCPRMapper]](./ImageCPRMapper.html "Curved Planar Reformat GPU mapper, stretched and straightened")
[![SphereMapper Example][SphereMapper]](./SphereMapper.html "GPU sphere mapper")
[![StickMapper Example][StickMapper]](./StickMapper.html "GPU stick/cylinder/column mapper")
[![Glyph3DMapper Example][Glyph3DMapper]](./Glyph3DMapper.html "Glyph mapper to render the same object multiple times")
[![ScalarBarActor Example][ScalarBarActor]](./ScalarBarActor.html "Scalar bar/color legend/LUT actor")
[![VolumeMapper Example][VolumeMapper]](./VolumeMapper.html "3D volume ray cast mapper witch volumetric scattering")
[![SurfaceLICMapper Example][SurfaceLICMapper]](./SurfaceLICMapper.html "Surface Line Integral Convolution (LIC) mapper")


</div>

[Glyph3DMapper]: ../docs/gallery/Glyph3DMapper.jpg
[ImageCPRMapper]: ../docs/gallery/ImageCPRMapper.jpg
[ImageMapper]: ../docs/gallery/ImageMapper.jpg
[ImageResliceMapper]: ../docs/gallery/ImageResliceMapper.gif
[ScalarBarActor]: ../docs/gallery/ScalarBarActor.jpg
[SphereMapper]: ../docs/gallery/SphereMapper.jpg
[StickMapper]: ../docs/gallery/StickMapper.jpg
[VolumeMapper]: ../docs/gallery/VolumeMapper.jpg
[SurfaceLICMapper]: ../docs/gallery/SurfaceLICMapper.jpg

## Picking/Selecting

<div class="gallery">

[![CellPicker Example][CellPicker]](./CellPicker.html "CPU cell picker/selector")
[![PointPicker Example][PointPicker]](./PointPicker.html "CPU point picker/selector")
[![HardwareSelector Example][HardwareSelector]](./HardwareSelector.html "GPU point/cell picker/selector with properties")

[CellPicker]: ../docs/gallery/CellPicker.jpg
[PointPicker]: ../docs/gallery/PointPicker.jpg
[HardwareSelector]: ../docs/gallery/HardwareSelector.jpg

## Widgets

<div class="gallery">

[![AngleWidget Example][AngleWidget]](./AngleWidget.html "Angle (radian, degree) widget example")
[![ImageCroppingWidget Example][ImageCroppingWidget]](./ImageCroppingWidget.html "Crop/Clip volume rendering with a bounding box/cube/orthogonal planes")
[![ImplicitPlaneWidget Example][ImplicitPlaneWidget]](./ImplicitPlaneWidget.html "Translate and orient an implicit plane with normal and origin")
[![InteractiveOrientationWidget Example][InteractiveOrientationWidget]](./InteractiveOrientationWidget.html "Corner coordinate system orientation widget")
[![LabelWidget Example][LabelWidget]](./LabelWidget.html "Place, edit text size and color of label widget")
[![LineWidget Example][LineWidget]](./LineWidget.html "Place and edit line/distance widget with handles")
[![PaintWidget Example][PaintWidget]](./PaintWidget.html "Draw strokes, create rectangle, square, ellipse and disk 2D widgets")
[![PolyLineWidget Example][PolyLineWidget]](./PolyLineWidget.html "Place multiple connected handles with text")
[![ResliceCursorWidget Example][ResliceCursorWidget]](./ResliceCursorWidget.html "Axial Coronal and Sagittal MPR/Oblique/Reformatted/Resliced/Slab/MIP views")
[![ShapeWidget Example][ShapeWidget]](./ShapeWidget.html "2D shape widgets with text information")
[![SphereWidget Example][SphereWidget]](./SphereWidget.html "2D sphere widget controlled with radius")
[![SplineWidget Example][SplineWidget]](./PaintWidget.html "Widget to draw open or closed (triangularized) sharp/smooth polygon widget")

</div>

[AngleWidget]: ../docs/gallery/AngleWidget.png
[ImageCroppingWidget]: ../docs/gallery/ImageCroppingWidget.jpg
[ImplicitPlaneWidget]: ../docs/gallery/ImplicitPlaneWidget.png
[InteractiveOrientationWidget]: ../docs/gallery/InteractiveOrientationWidget.png
[LabelWidget]: ../docs/gallery/LabelWidget.png
[LineWidget]: ../docs/gallery/LineWidget.png
[PaintWidget]: ../docs/gallery/PaintWidget.gif
[PolyLineWidget]: ../docs/gallery/PolyLineWidget.png
[ResliceCursorWidget]: ../docs/gallery/ResliceCursorWidget.jpg
[ShapeWidget]: ../docs/gallery/ShapeWidget.png
[SphereWidget]: ../docs/gallery/SphereWidget.jpg
[SplineWidget]: ../docs/gallery/SplineWidget.gif