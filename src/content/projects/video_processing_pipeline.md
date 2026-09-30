---
title: "Video Processing Pipeline"
date: "2026-08-10"
excerpt: "Web application for automated video segmentation, frame classification, and metadata extraction."
tags: ["Python", "Flask", "OpenCV", "JavaScript"]
repo: "https://github.com/Rusklass/video_processing_pipeline"
---

A lightweight web service for running automated video segmentation and metadata extraction jobs without manual command-line intervention.

### How It Works

- **File Ingestion:** Users upload video files through a browser interface with progress feedback.
- **Frame Processing:** Python workers segment video streams, sample keyframes, and run classification routines on frame sequences using OpenCV.
- **Metadata Output:** Generates structured JSON summaries of detected segments, timestamps, and extracted frame properties.

### Stack

- **Backend:** Python and Flask for HTTP endpoints and dispatching processing scripts.
- **Client:** HTML5, CSS, and asynchronous JavaScript for uploads and status polling.
- **Processing:** OpenCV and ffmpeg bindings for video file manipulation.