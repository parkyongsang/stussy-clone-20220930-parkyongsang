package com.stussy.stussyclone20220930yongsang.dto.validation;

import javax.validation.GroupSequence;
import java.util.zip.Deflater;

@GroupSequence({ValidationGroups.NotBlankGroup.class,
                ValidationGroups.SizeGroup.class,
                ValidationGroups.PatternCheckGroup.class,
                Deflater.class
})
public interface ValidationSequence {
}
