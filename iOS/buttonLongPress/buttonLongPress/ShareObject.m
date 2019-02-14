//
//  ShareObject.m
//  buttonLongPress
//
//  Created by CR on 2018/8/24.
//  Copyright © 2018年 CR. All rights reserved.
//

#import "ShareObject.h"

@interface ShareObject ()



@end

@implementation ShareObject

+ (ShareObject *)shareObject {
    
    static ShareObject *sharedInstance = nil;
    static dispatch_once_t predicate;
    dispatch_once(&predicate, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

- (NSMutableDictionary *)mdic {
    if (!_mdic){
        _mdic = [[NSMutableDictionary alloc] init];
    }
    return _mdic;
}

@end
